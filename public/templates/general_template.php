<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./public/styles/general.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="//cdn.ckeditor.com/4.13.0/standard/ckeditor.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <script type="module" async >
        import "./public/js/General.js"
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div id="page_wrapper" class="container-fluid">

    <div class="nav_back container-fluid"></div>
    <nav id="survey_admin_navbar" class="navbar fixed-top">
        <div class="container-fluid nav_inner">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">שאלונים</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a class="new_sur_init" href="#">שאלון חדש</a></li>
            </ul>
        </div>
        <div class="nav container navbar-nav navbar-left text-primary">
<!--            <div class="open_close_list"><i class="fas fa-chevron-down"></i>  </div>-->
        </div>
    </nav>
    <section id="survey_list_section" class="container">
        <?php require_once 'public/templates/surveys_list.php'?>
    </section>

<!--    --><?php //require_once 'public/templates/survey_form.php' ?>
<!--    --><?php //require_once 'public/templates/question_form_box.php' ?>

</div>
</body>
</html>
