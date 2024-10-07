<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Note $model */

$this->title = 'Update Note: ' . $model->note_id;
$this->params['breadcrumbs'][] = ['label' => 'Notes', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->note_id, 'url' => ['view', 'note_id' => $model->note_id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="note-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
