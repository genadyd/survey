<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 12/7/19
 * Time: 5:29 PM
 */


namespace Interfaces;


interface ModelInterface
{
    public function __construct($form_data);

    public function getOne();

    public function getList();

    public function delete();

    public function edit();

    public function save();
}
