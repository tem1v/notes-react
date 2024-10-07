<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "note".
 *
 * @property int $note_id
 * @property string|null $note_title
 * @property string|null $note_text
 */
class Note extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'note';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['note_title'], 'string', 'max' => 100],
            [['note_text'], 'string', 'max' => 245],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'note_id' => 'Note ID',
            'note_title' => 'Note Title',
            'note_text' => 'Note Text',
        ];
    }
}
