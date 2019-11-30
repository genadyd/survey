<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/7/19
 * Time: 7:38 PM
 */

namespace DBprocessor;
abstract class MainConnector
{
  protected $db_name, $db_host, $db_user, $db_pass;
  protected static $instance = NULL;
  protected static $connector;
  protected function __construct(string $db_connection_array_key)
  {
      require 'config.php';
      $this->db_host = $connect_params[$db_connection_array_key]['db_host'] ?? '0';
      $this->db_name = $connect_params[$db_connection_array_key]['db_name'] ?? '0';
      $this->db_user = $connect_params[$db_connection_array_key]['db_user'] ?? '0';
      $this->db_pass = $connect_params[$db_connection_array_key]['db_pass'] ?? '0';

  }
  public static function getInstance(string $db_connection_array_key){

      if(is_null(static::$instance)){
          static::$instance = new static( $db_connection_array_key);
          static::$connector = static::$instance->getPdoConnection();
      }
      return static::$connector;
}

  public function getPdoConnection(){
      try {
          $conn = new \PDO("mysql:host=$this->db_host;dbname=$this->db_name", $this->db_user, $this->db_pass,
          array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION));
          return $conn;
      }
      catch(PDOException $e)
      {
          echo "Connection failed: " . $e->getMessage();
          return false;
      }
  }

}
