<?php

namespace app\controllers;

use app\models\Note;
use yii\web\Controller;
//use yii\rest\Controller;
use yii\filters\VerbFilter;
use yii\web\Response;

class ApiController extends Controller
{
	public function behaviors()
	{
		$behaviors = parent::behaviors();
		
		// remove authentication filter
		$auth = $behaviors['authenticator'];
		unset($behaviors['authenticator']);
		
		// add CORS filter
		$behaviors['corsFilter'] = [
			'class' => \yii\filters\Cors::class,
			'cors' => [
				
				'Origin' => ['*'],
				
				// allow OPTIONS
				'Access-Control-Expose-Headers' => ['*'],
				
				// allow POST
				'Access-Control-Allow-Headers' => ['*'],
				
			],
		];
		
		// re-add authentication filter
		$behaviors['authenticator'] = $auth;
		
		// avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
		$behaviors['authenticator']['except'] = ['options'];
		
		// todo access
		//$behaviors['access'] = [
		//	'class' => \yii\filters\AccessControl::className(),
		//	'rules' => [
		//		[
		//			//'actions' => [],
		//			'allow' => true,
		//			'roles' => ['admin'],
		//		],
		//	],
		//];
		
		return $behaviors;
	}
	
	public function beforeAction($action)
	{
		//$this->enableCsrfValidation = false;
		
		\Yii::$app->response->format = Response::FORMAT_JSON;
		
		return parent::beforeAction($action);
	}
	
	public function actionGetAllNotes()
	{
		\Yii::$app->response->format = Response::FORMAT_JSON;
		$posts = Note::find()->asArray()->all();
		return $posts;
	}
	
	public function actionCreateProject()
	{
		$request = \Yii::$app->request;
		
		$post = $request->post();
		
		\Yii::info([
			'$post' => $post,
		], 'my / ' . __METHOD__);
		
		$newProject = new Project();
		
		// $newProject->name = $post['name'];
		
		$loadOk = $newProject->load($post);
		
		$saveOk = $newProject->save();
		
		$saveErrors = $newProject->errors;
		
		return [
			// 'msg' => 'api create project ok',
			'$post' => $post,
			'$loadOk' => $loadOk,
			'$saveOk' => $saveOk,
			'$newProject' => $newProject,
			'$saveErrors' => $saveErrors,
		];
	}
	
}
