<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/7/19
 * Time: 10:06 PM
 */


namespace DBprocessor\Processor;


use DBprocessor\MainConnector;
use mysql_xdevapi\Exception;

abstract class MainProcessor
{
    protected $_db;
    protected $_config_key;

    public function __construct(string $config_key)
    {
        $this->_config_key = $config_key;
        $this->dbConnectInit();
    }

    protected abstract function dbConnectInit();

    public function get( $query_array = array()){
        /*$query_array = array("TABLE_NAME"=>'defoult','FETCH'=>TRUE, 'IS_ASSOC'=>true, 'NEEDS_FIELDS'=>array(),'WHERE_PARAMS'=>array(),'PARAMS_ARRAY'=>array())*/
        if(!isset($query_array['TABLE_NAME'])||$query_array['TABLE_NAME'] == ''){
            throw new \Exception('table name not bee empty');
            return;
        }
       $table_name = trim($query_array['TABLE_NAME']);
       $fetch = isset($query_array['FETCH'])?$query_array['FETCH']:TRUE;
       $is_assoc = isset($query_array['IS_ASSOC'])?$query_array['IS_ASSOC']:TRUE;
       $needs_fields = isset($query_array['NEEDS_FIELDS'])?$query_array['NEEDS_FIELDS']:array();
       $where_params = isset($query_array['WHERE_PARAMS'])?$query_array['WHERE_PARAMS']:array();
       $params_array = isset($query_array['PARAMS_ARRAY'])?$query_array['PARAMS_ARRAY']:array();
       $order_by = isset($query_array['ORDER_BY'])?$query_array['ORDER_BY']:array();/*fields names for ORDERING*/
       $get_query = $this->getBuildStringQuery($table_name, $needs_fields ,$where_params, $order_by);
//         return ($get_query);
         $st = $this->_db->prepare($get_query);
         if(count($where_params)>0 && count($params_array)>0){
             foreach($where_params as $val){
                 if(isset($params_array[$val])){
                     $st->bindParam($val, $params_array[$val]) ;
                 }

             }
         }
         $st->execute();
         $f = $fetch ? 'fetchAll':'fetch';
         $assoc = $is_assoc ? 2: 5;
         return $st->{$f}($assoc);

    }
    protected function getBuildStringQuery(string $table_name, $needs_fields = array() ,$where_params = array()){
        $needs_string = '*';
        $where_string = '';
        if(count($needs_fields)>0){
            $needs_string = implode(', ', $needs_fields) ;
        }
        if(count($where_params)>0){
            foreach ($where_params as $p_key => $p_data){
                $where_string .= $p_key. ' = '.$p_data .' AND ';
            }
            $where_string = preg_replace('/AND\s*$/i','',$where_string);
        }

        $get_query = " SELECT {$needs_string}";

        $get_query .=" FROM {$table_name}";
        if($where_string !=''){
            $get_query .= " WHERE {$where_string} ";
        }
        return $get_query;

}
     public function query(string $query, array $params = array(), $get_all = false){
         $st = $this->_db->prepare($query);
         if(count($params)>0){
             foreach ($params as $key => $val){
//                 $val['val'] = $val['val'];
                 if(isset($val['type'])&& $val['type']!=''){
                     $st->bindParam($key, $val['val'],$val['type'] );
                 }else {
                     $st->bindParam($key, $val['val']);
                 }
             }
         }
         $st->execute();
         if(strpos($query,'INSERT')!==false || strpos($query,'UPDATE')!==false || strpos($query,'DELETE')!==false){
             return 1;
         }
         if($get_all) {
             return $res = $st->fetchAll(\PDO::FETCH_ASSOC);
         }
             return $st->fetch(\PDO::FETCH_ASSOC);

     }




}
