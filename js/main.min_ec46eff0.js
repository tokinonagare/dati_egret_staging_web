var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function s(t){try{u(o.next(t))}catch(e){i(e)}}function a(t){try{u(o["throw"](t))}catch(e){i(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,i&&(s=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(s=s.call(i,n[1])).done)return s;switch(i=0,s&&(n=[0,s.value]),n[0]){case 0:case 1:s=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,i=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(s=u.trys,!(s=s.length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){u.label=n[1];break}if(6===n[0]&&u.label<s[1]){u.label=s[1],s=n;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(n);break}s[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(o){n=[6,o],i=0}finally{r=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,s,a,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},HttpActionData=function(){function t(t){this.body={},this.validate(t)}return t.prototype.validate=function(t){throw new Error("需要子类实现")},t}();__reflect(HttpActionData.prototype,"HttpActionData",["IHttpActionData"]);var SQApi=function(){function t(){}return t.prototype.fetchJson=function(t,e,n){var o=this,r=new egret.HttpRequest;r.responseType=egret.HttpResponseType.TEXT,r.open(t.url,egret.HttpMethod.GET),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Access-Control-Allow-Origin","*");for(var i=0,s=Object.keys(t.header);i<s.length;i++){var a=s[i];r.setRequestHeader(a,t.header[a])}r.send(),r.addEventListener(egret.Event.COMPLETE,function(t){var r=t.currentTarget.response;if(!r)return void n(new SQApiError({message:"HTTP GET response is null"}));var i=JSON.parse(r);i.ok?e(i.result):n(o.getResponseError(i))},this),r.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){n(new SQApiError({message:"无法连接到服务器"}))},this)},t.prototype.postReturnJson=function(t,e,n){var o=this,r=t.url+this.buildParams(t.parameters),i=new egret.HttpRequest;i.responseType=egret.HttpResponseType.TEXT,i.open(r,egret.HttpMethod.POST);for(var s=0,a=Object.keys(t.header);s<a.length;s++){var u=a[s];i.setRequestHeader(u,t.header[u])}if(i.addEventListener(egret.Event.COMPLETE,function(t){var r=t.currentTarget.response;if(!r)return void n(new SQApiError({message:"HTTP POST response is null"}));var i=JSON.parse(r);i.ok?e(i.result):n(o.getResponseError(i))},this),i.addEventListener(egret.IOErrorEvent.IO_ERROR,function(t){n(new SQApiError({message:"无法连接到服务器"}))},this),t.body){var c=this.buildBody(t.body);i.send(c)}else i.send()},t.prototype.getResponseError=function(t){if(t.errors){if(t.errors.length<=0)return new SQApiError({message:"服务器请求错误返回格式不对。"});var e=t.errors[0],n=e.message;return e.field&&(n=n+" ("+e.field+")"),new SQApiError({message:n,error_type:t.errors[0].error_type})}return new SQApiError({message:t.message,error_type:t.error_type})},t.prototype.buildParams=function(t){if(!t)return"";var e="?";for(var n in t)n&&(e=e+n+"="+t[n]+"&");return e=e.slice(0,-1)},t.prototype.buildBody=function(t){return JSON.stringify(t)},t}();__reflect(SQApi.prototype,"SQApi");var NoAuthorizedHeaderFactory=function(){function t(t){this.header={Accept:"application/json","Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}return t.prototype.create=function(){return this.header},t}();__reflect(NoAuthorizedHeaderFactory.prototype,"NoAuthorizedHeaderFactory",["IHeaderFactory"]);var SQLayer=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.onEnter=function(){for(var t=this.numChildren,n=0;t>n;n+=1){var o=this.getChildAt(n);o instanceof e&&o.onEnter()}},e.prototype.onExit=function(){for(var t=this.numChildren,n=0;t>n;n+=1){var o=this.getChildAt(n);o instanceof e&&o.onExit()}},e}(eui.Component);__reflect(SQLayer.prototype,"SQLayer");var SQScene=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.onEnter=function(){for(var t=this.numChildren,e=0;t>e;e+=1){var n=this.getChildAt(e);n instanceof SQLayer&&n.onEnter()}},e.prototype.onExit=function(){for(var t=this.numChildren,e=0;t>e;e+=1){var n=this.getChildAt(e);n instanceof SQLayer&&n.onExit()}},e}(eui.Component);__reflect(SQScene.prototype,"SQScene");var approveTagDatas=[{name:"有趣",normal_image:"btn_good_1@2x_png",on_image:"btn_good_1_selected@2x_png"},{name:"有意思",normal_image:"btn_good_2@2x_png",on_image:"btn_good_2_selected@2x_png"},{name:"题很棒",normal_image:"btn_good_3@2x_png",on_image:"btn_good_3_selected@2x_png"},{name:"蛮喜欢",normal_image:"btn_good_4@2x_png",on_image:"btn_good_4_selected@2x_png"}],disapproveTagDatas=[{name:"挺无聊",normal_image:"btn_bad_1@2x_png",on_image:"btn_bad_1_selected@2x_png"},{name:"没意思",normal_image:"btn_bad_2@2x_png",on_image:"btn_bad_2_selected@2x_png"},{name:"不喜欢",normal_image:"btn_bad_3@2x_png",on_image:"btn_bad_3_selected@2x_png"},{name:"枯燥",normal_image:"btn_bad_4@2x_png",on_image:"btn_bad_4_selected@2x_png"}],QuizTagModel=function(){function t(){}return t.prototype.listApproveTags=function(){return this.approveTags=approveTagDatas.map(function(t){return new Tag(t)}),this.approveTags},t.prototype.listSelectedApproveTags=function(){return this.approveTags.filter(function(t){return t.selected?t:void 0})},t.prototype.listDisapproveTags=function(){return this.disapproveTags=disapproveTagDatas.map(function(t){return new Tag(t)}),this.disapproveTags},t.prototype.listSelectedDisapproveTags=function(){return this.disapproveTags.filter(function(t){return t.selected?t:void 0})},t}();__reflect(QuizTagModel.prototype,"QuizTagModel");var Tag=function(){function t(t){this.name=t.name,this.normalImage=t.normal_image,this.onImage=t.on_image,this.selected=!1}return t}();__reflect(Tag.prototype,"Tag");var SQEventCenter=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.sharedInstance=function(){return e.instance||(e.instance=new e),e.instance},e}(egret.EventDispatcher);__reflect(SQEventCenter.prototype,"SQEventCenter");var GameOverScene=function(t){function e(e){var n=t.call(this)||this;return n.skinName="GameOverSceneUI",n.model=e,n.continueButton.addEventListener(egret.TouchEvent.TOUCH_TAP,n.onPressContinueButton,n),n}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.setGameInformations()},e.prototype.setGameInformations=function(){this.answerCorrectInfo.setTitleText("答对题目"),this.answerCorrectInfo.setValueText(String(this.model.getAnswerCorrectAmount())),this.answerWrongInfo.setTitleText("答错题目"),this.answerWrongInfo.setValueText(String(this.model.getAnswerWrongAmount()))},e.prototype.onPressContinueButton=function(){SQSceneManager.sharedInstance().removeChildLayer(this),SQSceneManager.sharedInstance().replaceScene(new QuizScene)},e}(SQScene);__reflect(GameOverScene.prototype,"GameOverScene");var GameOverSceneModel=function(){function t(t){this.answerCorrectAmount=t.answer_correct_amount,this.answerWrongAmount=t.answer_wrong_amount}return t.prototype.getAnswerCorrectAmount=function(){return this.answerCorrectAmount},t.prototype.getAnswerWrongAmount=function(){return this.answerWrongAmount},t}();__reflect(GameOverSceneModel.prototype,"GameOverSceneModel");var GameOverInfoItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="GameOverInfoItemUI",e}return __extends(e,t),e.prototype.setTitleText=function(t){this.titleLabel.text=t},e.prototype.setValueText=function(t){this.valueLabel.text=t},e}(SQLayer);__reflect(GameOverInfoItem.prototype,"GameOverInfoItem");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function o(o){e.call(n,o,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?o(r):RES.getResAsync(t,o,this)}else RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.onAddToStage=function(t){egret.lifecycle.addLifecycleListener(function(t){t.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadPreloadResourceGroup()];case 1:return e.sent(),this.createLaunchGameScene(),[4,this.loadResource()];case 2:return e.sent(),this.goPlayingGame(),[4,platform.login()];case 3:return e.sent(),[4,platform.getUserInfo()];case 4:return t=e.sent(),console.log(t),[2]}})})},e.prototype.loadPreloadResourceGroup=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var o=new eui.Theme("resource/default.thm.json",t.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,RES.loadGroup("answer")];case 1:return e.sent(),[3,3];case 2:return t=e.sent(),console.error(t),[3,3];case 3:return[2]}})})},e.prototype.createLaunchGameScene=function(){var t=this.createBitmapByName("bg_tu@2x_jpg");this.addChild(t);var e=this.stage.stageWidth,n=this.stage.stageHeight;t.width=e,t.height=n},e.prototype.goPlayingGame=function(){SQSceneManager.sharedInstance().addRootStage(this),SQSceneManager.sharedInstance().pushScene(new QuizScene)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var SQApiConfig=function(){function t(){}return t.Host="https://api-staging.shafayouxi.org",t.V1="v1",t}();__reflect(SQApiConfig.prototype,"SQApiConfig");var SQApiErrorType;!function(t){t[t.None=0]="None",t[t.UserNotFound=1]="UserNotFound"}(SQApiErrorType||(SQApiErrorType={}));var SQApiError=function(t){function e(e){var n=t.call(this)||this;return n.message=e.message,"user_not_found"===e.error_type?n.type=SQApiErrorType.UserNotFound:n.type=SQApiErrorType.None,n}return __extends(e,t),e}(Error);__reflect(SQApiError.prototype,"SQApiError");var HttpPost=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.execute=function(t,e,n){var o={url:t.url,header:t.headerFactory.create(),body:t.body};this.postReturnJson(o,function(t){e(t)},function(t){n(t)})},e}(SQApi);__reflect(HttpPost.prototype,"HttpPost",["IHttpAction"]);var AuthorizedHeaderFactory=function(t){function e(e){var n=t.call(this,e)||this;return e.access_token&&(n.header.Authorization="Bearer "+e.access_token),n}return __extends(e,t),e}(NoAuthorizedHeaderFactory);__reflect(AuthorizedHeaderFactory.prototype,"AuthorizedHeaderFactory");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var QuizScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizSceneUI",e.model=new QuizSceneModel,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.fetchQuestions(),this.bottomToolbar.setItems(this.model.listBottomToolbarItems()),this.setupCallbacks()},e.prototype.setupCallbacks=function(){this.navigationBar.pressLeftButtonHandler=this.quitGame.bind(this),this.dashboard.pressAnswerHandler=this.chooseAnswer.bind(this),this.quizFinishedLayer.pressApproveButtonHandler=this.approveQuiz.bind(this),this.quizFinishedLayer.pressDisapproveButtonHandler=this.disapproveQuiz.bind(this),this.quizFinishedLayer.postQuestionTagsHandler=this.postQuestionTags.bind(this),this.quizFinishedLayer.pressContinueHandler=this.next.bind(this),this.questionLayer.timesUpHandler=this.timesUp.bind(this)},e.prototype.fetchQuestions=function(){var t=this,e=new SQLoadingLayer;e.show(),this.model.fetchQuestions(function(n){e.hide(),t.showQuestion(t.model.getQuestionAtIndex(t.model.currentQuestionAmount))},function(t){e.hide()})},e.prototype.showQuestion=function(t){this.questionLayer.setCategory(t.category),this.questionLayer.setQuestionText(t.text),this.questionLayer.startQuizTimer(20),this.questionLayer.setProgressLabel(this.model.currentQuestionAmount+1+"/"+this.model.totalQuestionAmount),this.dashboard.setAnswers(t.answers),this.model.countQuestionById(t.id,function(){console.log("问题计数成功")},function(t){console.log("问题计数失败"+t.message)})},e.prototype.timesUp=function(){this.dashboard.disableAllButtons(),this.questionLayer.showAnswerTimesUpAnimation(),this.postAnswer("",100)},e.prototype.chooseAnswer=function(t){var e=this;this.questionLayer.stopQuizTimer(function(n){var o=new ButtonStateEvent(ButtonStateEvent.ANSWER_CORRECT);if(SQEventCenter.sharedInstance().dispatchEvent(o),e.model.setCurrentAnswer(t),t.isCorrect)e.questionLayer.showAnswerCorrectAnimation(),e.model.addAnswerCorrectAmount();else{var r=new ButtonStateEvent(ButtonStateEvent.ANSWER_WRONG);SQEventCenter.sharedInstance().dispatchEvent(r),e.questionLayer.showAnswerWrongAnimation(),e.model.addAnswerWrongAmount()}e.postAnswer(t.name,n)})},e.prototype.postAnswer=function(t,e){var n=this,o=this.model.getQuestionAtIndex(this.model.currentQuestionAmount),r={question_id:o.id,answer_text:t,duration_seconds:e};this.model.postAnswer(r,function(){n.showQuizFinishedLayer(o)},function(t){console.log("发送回答失败")})},e.prototype.showQuizFinishedLayer=function(t){this.quizFinishedLayer.setQuestion(t),this.dashboardTweenGroup.play(0)},e.prototype.quitGame=function(){console.log("quitGame........")},e.prototype.approveQuiz=function(t){var e={action:"up",question_id:t.id,question_token:t.token};this.model.voteQuestionById(e,function(){},function(t){})},e.prototype.disapproveQuiz=function(t){var e={action:"down",question_id:t.id,question_token:t.token};this.model.voteQuestionById(e,function(){},function(t){})},e.prototype.postQuestionTags=function(t,e){var n={question_id:t.id,tag:e[0].name};this.model.postQuestionTags(n,function(t){console.log("postQuestionTags success #####",t)},function(t){console.log("postQuestionTags failed #####",t.message)})},e.prototype.next=function(){if(!this.model.getCurrentAnswer())return void SQSceneManager.sharedInstance().addChildLayer(new GameOverScene(this.createGameOverModel()));if(!this.model.getCurrentAnswer().isCorrect)return void SQSceneManager.sharedInstance().addChildLayer(new GameOverScene(this.createGameOverModel()));this.model.currentQuestionAmount+=1;var t=new ButtonStateEvent(ButtonStateEvent.ANSWER_RESET);return SQEventCenter.sharedInstance().dispatchEvent(t),this.dashboardGroup.x=0,this.model.currentQuestionAmount===this.model.totalQuestionAmount?(this.model.reset(),void this.fetchQuestions()):void this.showQuestion(this.model.getQuestionAtIndex(this.model.currentQuestionAmount))},e.prototype.createGameOverModel=function(){var t={answer_correct_amount:this.model.getAnswerCorrectAmount(),answer_wrong_amount:this.model.getAnswerWrongAmount()};return new GameOverSceneModel(t)},e}(SQScene);__reflect(QuizScene.prototype,"QuizScene");var Answer=function(){function t(t){this.name=t.name,this.isCorrect=t.correct,this.index=t.index}return t}();__reflect(Answer.prototype,"Answer");var Question=function(){function t(t){this.category=t.category,this.id=t.id,this.language=t.language,this.text=t.text,this.token=t.question_token,this.answers=this.createAnswers(t.options)}return t.prototype.createAnswers=function(t){return t.map(function(t,e){var n=t;return n.index=e,new Answer(n)})},t}();__reflect(Question.prototype,"Question");var QuizSceneModel=function(){function t(){this.currentQuestionAmount=0,this.httpPost=new HttpPost,this.answerCorrectAmount=0,this.answerWrongAmount=0}return t.prototype.setCurrentAnswer=function(t){this.currentAnswer=t},t.prototype.getCurrentAnswer=function(){return this.currentAnswer},t.prototype.addAnswerCorrectAmount=function(){this.answerCorrectAmount+=1},t.prototype.getAnswerCorrectAmount=function(){return this.answerCorrectAmount},t.prototype.addAnswerWrongAmount=function(){this.answerWrongAmount+=1},t.prototype.getAnswerWrongAmount=function(){return this.answerWrongAmount},t.prototype.reset=function(){this.currentQuestionAmount=0,this.questions=[]},t.prototype.getQuestionAtIndex=function(t){return this.questions.length<=t?void 0:this.questions[t]},t.prototype.fetchQuestions=function(t,e){var n=this,o=new FetchQuestionsData({access_token:UserModel.sharedInstance().attribute.token,user_id:UserModel.sharedInstance().attribute.id});this.httpPost.execute(o,function(e){n.questions=n.createQuestions(e.questions),n.totalQuestionAmount=n.questions.length,t(n.questions)},function(t){e(t)})},t.prototype.postAnswer=function(t,e,n){var o=new PostAnswerData({user_id:UserModel.sharedInstance().attribute.id,quiz_token:UserModel.sharedInstance().attribute.quizToken,question_id:t.question_id,duration_seconds:t.duration_seconds,answer:t.answer_text});this.httpPost.execute(o,function(t){e()},function(t){n(t)})},t.prototype.countQuestionById=function(t,e,n){var o=new CountQuestionData({user_id:UserModel.sharedInstance().attribute.id,question_id:t});this.httpPost.execute(o,function(t){e()},function(t){n(t)})},t.prototype.voteQuestionById=function(t,e,n){var o=new VoteQuestionData({user_id:UserModel.sharedInstance().attribute.id,token:t.question_token,question_id:t.question_id,action:t.action});this.httpPost.execute(o,function(t){e(t)},function(t){n(t)})},t.prototype.postQuestionTags=function(t,e,n){var o=new PostTagData({user_id:UserModel.sharedInstance().attribute.id,question_id:t.question_id,tag:t.tag});this.httpPost.execute(o,function(t){e(t)},function(t){n(t)})},t.prototype.listBottomToolbarItems=function(){return[{icon:"img_bomb@2x_png",title:"炸弹",description:"去掉两个错误答案"},{icon:"img_opportunity@2x_png",title:"机会",description:"多一次机会"},{icon:"img_jump_over@2x_png",title:"跳过",description:"跳过这一题"}]},t.prototype.createQuestions=function(t){return t.map(function(t){return new Question(t)})},t}();__reflect(QuizSceneModel.prototype,"QuizSceneModel");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var CountQuestionData=function(t){function e(e){var n=t.call(this,e)||this;return n.url=SQApiConfig.Host+"/"+SQApiConfig.V1+"/count/"+e.question_id,n.headerFactory=new NoAuthorizedHeaderFactory({}),n.body.user_id=e.user_id,n}return __extends(e,t),e.prototype.validate=function(t){return this.isLegal=!1,t.user_id?void(this.isLegal=!0):void(this.validateMessage="没有找到用户id")},e}(HttpActionData);__reflect(CountQuestionData.prototype,"CountQuestionData");var FetchQuestionsData=function(t){function e(e){var n=t.call(this,e)||this;return n.url=SQApiConfig.Host+"/"+SQApiConfig.V1+"/quiz/game/marathon",n.headerFactory=new AuthorizedHeaderFactory({access_token:e.access_token}),n.body.user_id=e.user_id,n}return __extends(e,t),e.prototype.validate=function(t){return this.isLegal=!1,t.access_token?t.user_id?void(this.isLegal=!0):void(this.validateMessage="请提供用户id"):void(this.validateMessage="请传入access_token")},e}(HttpActionData);__reflect(FetchQuestionsData.prototype,"FetchQuestionsData");var PostAnswerData=function(t){function e(e){var n=t.call(this,e)||this;return n.url=SQApiConfig.Host+"/"+SQApiConfig.V1+"/quiz/answer",n.headerFactory=new AuthorizedHeaderFactory({access_token:e.access_token}),n.body.user_id=e.user_id,n.body.question_id=e.question_id,n.body.quiz_token=e.quiz_token,n.body.duration_seconds=e.duration_seconds,n.body.answer=e.answer,n}return __extends(e,t),e.prototype.validate=function(t){this.isLegal=!0},e}(HttpActionData);__reflect(PostAnswerData.prototype,"PostAnswerData");var PostTagData=function(t){function e(e){var n=t.call(this,e)||this;return n.url=SQApiConfig.Host+"/"+SQApiConfig.V1+"/tag/"+e.question_id,n.headerFactory=new AuthorizedHeaderFactory({access_token:e.access_token}),n.body.user_id=e.user_id,n.body.tag=e.tag,n}return __extends(e,t),e.prototype.validate=function(t){return this.isLegal=!1,t.user_id?t.tag?void(this.isLegal=!0):void(this.validateMessage="请提供tag"):void(this.validateMessage="请提供用户的id")},e}(HttpActionData);__reflect(PostTagData.prototype,"PostTagData");var VoteQuestionData=function(t){function e(e){var n=t.call(this,e)||this;return n.url=SQApiConfig.Host+"/"+SQApiConfig.V1+"/vote/"+e.question_id,n.headerFactory=new NoAuthorizedHeaderFactory({}),n.body.user_id=e.user_id,n.body.action=e.action,n.body.token=e.token,console.log(e),n}return __extends(e,t),e.prototype.validate=function(t){return this.isLegal=!0,t.user_id?t.action?t.token?t.question_id?void(this.validateMessage="请提供问题id"):void(this.isLegal=!0):void(this.validateMessage="请提供有效问题token"):void(this.validateMessage="没有提供投票行为"):void(this.validateMessage="没有可用用户id")},e}(HttpActionData);__reflect(VoteQuestionData.prototype,"VoteQuestionData");var QuestionLayer=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuestionLayerUI",e}return __extends(e,t),e.prototype.showAnswerTimesUpAnimation=function(){var t=this,e=AnimationFactory.create("answer_times_up_animation_json","answer_times_up_animation_png");this.animationContainer.addChild(e),this.animationContainer.layout=this.createAnimationContainerLayout(),e.gotoAndPlay("play",0),e.addEventListener(egret.MovieClipEvent.COMPLETE,function(){t.animationContainer.removeChild(e)},this)},e.prototype.showAnswerCorrectAnimation=function(){var t=this,e=AnimationFactory.create("answer_correct_animation_json","answer_correct_animation_png");this.animationContainer.addChild(e),this.animationContainer.layout=this.createAnimationContainerLayout(),e.gotoAndPlay("play",0),e.addEventListener(egret.MovieClipEvent.COMPLETE,function(){t.animationContainer.removeChild(e)},this)},e.prototype.showAnswerWrongAnimation=function(){var t=this,e=AnimationFactory.create("answer_wrong_animation_json","answer_wrong_animation_png");this.animationContainer.addChild(e),this.animationContainer.layout=this.createAnimationContainerLayout(),e.gotoAndPlay("play",0),e.addEventListener(egret.MovieClipEvent.COMPLETE,function(){t.animationContainer.removeChild(e)},this)},e.prototype.createAnimationContainerLayout=function(){var t=new eui.HorizontalLayout;return t.gap=0,t.horizontalAlign=egret.HorizontalAlign.CENTER,t.verticalAlign=egret.VerticalAlign.MIDDLE,t},e.prototype.setCategory=function(t){this.categoryLabel.text=t},e.prototype.setProgressLabel=function(t){this.progressLabel.text=t},e.prototype.startQuizTimer=function(t){this.timer||(this.initialTime=t,this.remainTime=t,this.timer=new egret.Timer(1e3,t),this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerCalled,this),this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCompleted,this),this.timeLabel.text=t+'"',this.timer.start())},e.prototype.stopQuizTimer=function(t){t(this.initialTime-this.remainTime),this.stopTimer()},e.prototype.setQuestionText=function(t){this.questionLabel.text=t},e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.animationContainer=new eui.Group,this.animationContainer.width=this.width,this.animationContainer.height=this.height,this.animationContainer.y=-140,this.addChild(this.animationContainer)},e.prototype.stopTimer=function(){this.timer&&(this.timer.stop(),this.timer.removeEventListener(egret.TimerEvent.TIMER,this.timerCalled,this),this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCompleted,this),this.timer=void 0)},e.prototype.timerCalled=function(){this.remainTime-=1,this.timeLabel.text=this.remainTime+'"'},e.prototype.timerCompleted=function(){this.stopTimer(),this.timesUpHandler()},e}(SQLayer);__reflect(QuestionLayer.prototype,"QuestionLayer");var QuizDashboard=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizDashboardUI",e.answerOne.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressAnswerOne,e),e.answerTwo.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressAnswerTwo,e),e.answerThree.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressAnswerThree,e),e.answerFour.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressAnswerFour,e),e}return __extends(e,t),e.prototype.setAnswers=function(t){this.answers=t,this.enableAllButtons(),this.answerOne.setAnswer(t[0]),this.answerTwo.setAnswer(t[1]),this.answerThree.setAnswer(t[2]),this.answerFour.setAnswer(t[3])},e.prototype.disableAllButtons=function(){this.answerOne.enabled=!1,this.answerTwo.enabled=!1,this.answerThree.enabled=!1,this.answerFour.enabled=!1},e.prototype.onPressAnswerOne=function(){this.disableAllButtons(),this.pressAnswerHandler&&this.pressAnswerHandler(this.answers[0])},e.prototype.onPressAnswerTwo=function(){this.disableAllButtons(),this.pressAnswerHandler&&this.pressAnswerHandler(this.answers[1])},e.prototype.onPressAnswerThree=function(){this.disableAllButtons(),this.pressAnswerHandler&&this.pressAnswerHandler(this.answers[2])},e.prototype.onPressAnswerFour=function(){this.disableAllButtons(),this.pressAnswerHandler&&this.pressAnswerHandler(this.answers[3])},e.prototype.enableAllButtons=function(){this.answerOne.enabled=!0,this.answerTwo.enabled=!0,this.answerThree.enabled=!0,this.answerFour.enabled=!0},e}(SQLayer);__reflect(QuizDashboard.prototype,"QuizDashboard");var QuizDashboardButton=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizDashboardButtonUI",e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,e.onTapBegin,e),e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,e.onTapReleaseOutside,e),e.addEventListener(egret.TouchEvent.TOUCH_END,e.onTappEnd,e),e.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onTapped,e),SQEventCenter.sharedInstance().addEventListener(ButtonStateEvent.ANSWER_RESET,e.reset,e),e}return __extends(e,t),e.prototype.setAnswer=function(t){this.answer=t,this.setTitle(t.name),SQEventCenter.sharedInstance().removeEventListener(ButtonStateEvent.ANSWER_CORRECT,this.showCorrectState,this),SQEventCenter.sharedInstance().addEventListener(ButtonStateEvent.ANSWER_CORRECT,this.showCorrectState,this)},e.prototype.showCorrectState=function(){this.answer.isCorrect&&(this.currentState="correct")},e.prototype.showWrongState=function(){this.currentState="wrong"},e.prototype.reset=function(){this.currentState="up",SQEventCenter.sharedInstance().removeEventListener(ButtonStateEvent.ANSWER_WRONG,this.showWrongState,this)},e.prototype.setTitle=function(t){this.titleLabel.text=t},e.prototype.onTapped=function(){SQEventCenter.sharedInstance().addEventListener(ButtonStateEvent.ANSWER_WRONG,this.showWrongState,this)},e.prototype.onTapBegin=function(){this.titleLabel.visible=!1},e.prototype.onTapReleaseOutside=function(){this.titleLabel.visible=!0},e.prototype.onTappEnd=function(){this.titleLabel.visible=!0},e}(eui.Button);__reflect(QuizDashboardButton.prototype,"QuizDashboardButton");var QuizFinishedLayer=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizFinishedLayerUI",e.approveButton.addEventListener(egret.Event.CHANGE,e.onApproveChanged,e),e.disapproveButton.addEventListener(egret.Event.CHANGE,e.onDisapproveChanged,e),e.continueButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressContinueButton,e),e.tagModel=new QuizTagModel,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),this.tagList.itemRenderer=QuizTagItem;new eui.RadioButton},e.prototype.setQuestion=function(t){this.question=t},e.prototype.onApproveChanged=function(t){this.showApproveTags(this.approveButton.selected),this.disapproveButton.selected=!1},e.prototype.showApproveTags=function(t){this.tagList.dataProvider=new eui.ArrayCollection(t?this.tagModel.listApproveTags():[])},e.prototype.onDisapproveChanged=function(t){this.showDisapproveTags(this.disapproveButton.selected),this.approveButton.selected=!1},e.prototype.showDisapproveTags=function(t){this.tagList.dataProvider=new eui.ArrayCollection(t?this.tagModel.listDisapproveTags():[])},e.prototype.onPressContinueButton=function(){this.approveButton.selected?(this.pressApproveButtonHandler(this.question),this.postQuestionTagsHandler(this.question,this.tagModel.listSelectedApproveTags())):this.disapproveButton.selected&&(this.pressDisapproveButtonHandler(this.question),this.postQuestionTagsHandler(this.question,this.tagModel.listSelectedDisapproveTags())),this.reset(),this.pressContinueHandler&&this.pressContinueHandler()},e.prototype.reset=function(){this.approveButton.selected=!1,this.showApproveTags(!1),this.disapproveButton.selected=!1,this.showDisapproveTags(!1)},e}(SQLayer);__reflect(QuizFinishedLayer.prototype,"QuizFinishedLayer");var QuizSceneBottomToolbar=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizSceneBottomToolbarUI",e.bombButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressBombButton,e),e.chanceButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressChanceButton,e),e.skipButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressSkipButton,e),e}return __extends(e,t),e.prototype.setItems=function(t){if(3===t.length){var e=t[0];this.bombButton.setIcon(e.icon),this.bombButton.setTitle(e.title),this.bombButton.setDescription(e.description);var n=t[1];this.chanceButton.setIcon(n.icon),this.chanceButton.setTitle(n.title),this.chanceButton.setDescription(n.description);var o=t[2];this.skipButton.setIcon(o.icon),this.skipButton.setTitle(o.title),this.skipButton.setDescription(o.description)}},e.prototype.onPressBombButton=function(){},e.prototype.onPressChanceButton=function(){},e.prototype.onPressSkipButton=function(){},e}(SQLayer);__reflect(QuizSceneBottomToolbar.prototype,"QuizSceneBottomToolbar");var QuizSceneBottomToolbarItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizSceneBottomToolbarItemUI",e}return __extends(e,t),e.prototype.setIcon=function(t){this.icon.source=t},e.prototype.setTitle=function(t){this.titleLabel.text=t
},e.prototype.setDescription=function(t){this.descriptionLabel.text=t},e}(SQLayer);__reflect(QuizSceneBottomToolbarItem.prototype,"QuizSceneBottomToolbarItem");var QuizTagItem=function(t){function e(){var e=t.call(this)||this;return e.skinName="QuizTagItemUI",e.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onTapped,e),e}return __extends(e,t),e.prototype.dataChanged=function(){this.image.source=this.data.normalImage},e.prototype.onTapped=function(){this.data.selected=!this.data.selected,this.image.source=this.data.selected?this.data.onImage:this.data.normalImage},e}(eui.ItemRenderer);__reflect(QuizTagItem.prototype,"QuizTagItem");var UserAttribute=function(){function t(t){this.id="6301af78-a2d5-4f93-b6e2-4e54e537ec9b",this.token="503dc3c3-cd84-4b10-ab97-c4ae664808f3",this.quizToken="cb725ad6-9e98-48f1-a20a-db95b4c2ac49"}return t}();__reflect(UserAttribute.prototype,"UserAttribute",["IAttribute"]);var UserModel=function(){function t(){this.attribute=new UserAttribute({})}return t.sharedInstance=function(){return t.instance||(t.instance=new t),t.instance},t}();__reflect(UserModel.prototype,"UserModel");var AnimationFactory=function(){function t(){}return t.create=function(t,e){var n=RES.getRes(t),o=RES.getRes(e),r=new egret.MovieClipDataFactory(n,o);return new egret.MovieClip(r.generateMovieClipData("animation"))},t}();__reflect(AnimationFactory.prototype,"AnimationFactory");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,o){function r(t){e.call(o,t)}function i(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),n.call(o))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(o,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(o,generateEUI2)},s)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var SQPopupLayer=function(t){function e(){return t.call(this)||this}return __extends(e,t),e}(SQLayer);__reflect(SQPopupLayer.prototype,"SQPopupLayer");var ButtonStateEvent=function(t){function e(e,n,o){return void 0===n&&(n=!1),void 0===o&&(o=!1),t.call(this,e,n,o)||this}return __extends(e,t),e.ANSWER_CORRECT="event.button.state.answer.correct",e.ANSWER_WRONG="event.button.state.answer.wrong",e.ANSWER_RESET="event.button.state.answer.reset",e}(egret.Event);__reflect(ButtonStateEvent.prototype,"ButtonStateEvent");var SQSceneManager=function(t){function e(){var e=t.call(this)||this;return e.sceneStack=new eui.ViewStack,e.scenes=[],e}return __extends(e,t),e.sharedInstance=function(){return e.instance||(e.instance=new e),e.instance},e.prototype.addRootStage=function(t){this.rootStage=t,this.rootStage.addChild(this.sceneStack)},e.prototype.addChildLayer=function(t){if(!t)throw new Error("无法添加不存在的layer");this.rootStage.addChild(t),t.onEnter()},e.prototype.removeChildLayer=function(t){if(!t)throw new Error("无法移出不存在的scene");t.parent&&(t.onExit(),this.rootStage.removeChild(t),t=void 0)},e.prototype.pushScene=function(t){if(!t)throw new Error("你不能push一个不存在的scene");this.sceneStack.addChild(t),t.onEnter(),this.scenes.push(t),this.sceneStack.selectedIndex=this.sceneStack.length-1},e.prototype.popScene=function(){if(1<=this.scenes.length){var t=this.scenes.pop();t.onExit();var e=this.sceneStack.removeChild(t);this.sceneStack.selectedIndex=this.sceneStack.length-1,this.sceneStack.selectedIndex<0&&(this.sceneStack.selectedIndex=0),e=void 0}},e.prototype.replaceScene=function(t){if(!t)throw new Error("你不能replace一个不存在的scene");this.popScene(),this.pushScene(t)},e.instance=void 0,e}(egret.DisplayObjectContainer);__reflect(SQSceneManager.prototype,"SQSceneManager");var NavigationBar=function(t){function e(){var e=t.call(this)||this;return e.skinName="NavigationBarUI",e.leftButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onPressLeftButton,e),e}return __extends(e,t),e.prototype.onPressLeftButton=function(){this.pressLeftButtonHandler&&this.pressLeftButtonHandler()},e}(SQLayer);__reflect(NavigationBar.prototype,"NavigationBar");var PureTextButton=function(t){function e(){var e=t.call(this)||this;return e.skinName="PureTextButtonUI",e}return __extends(e,t),e}(SQLayer);__reflect(PureTextButton.prototype,"PureTextButton");var SQLoadingLayer=function(t){function e(){var e=t.call(this)||this;e.skinName="LoadingLayerUI";var n=RES.getRes("loading_animation_json"),o=RES.getRes("loading_animation_png"),r=new egret.MovieClipDataFactory(n,o);return e.loadingAnimation=new egret.MovieClip(r.generateMovieClipData("loading_animation")),e.addChild(e.loadingAnimation),e.loadingAnimation.x=(e.width-e.loadingAnimation.width)/2,e.loadingAnimation.y=(e.height-e.loadingAnimation.height)/2,e.loadingAnimation.addEventListener(egret.MovieClipEvent.COMPLETE,function(){e.loadingAnimation.gotoAndPlay("play",0)},e),e}return __extends(e,t),e.prototype.show=function(){this.loadingAnimation.gotoAndPlay("play",0),SQSceneManager.sharedInstance().addChildLayer(this)},e.prototype.hide=function(){this.loadingAnimation.gotoAndStop(0),this.removeChild(this.loadingAnimation),this.loadingAnimation=void 0,SQSceneManager.sharedInstance().removeChildLayer(this)},e}(SQLayer);__reflect(SQLoadingLayer.prototype,"SQLoadingLayer");var TransparentLayer=function(t){function e(){var e=t.call(this)||this;return e.skinName="TransparentLayerUI",e}return __extends(e,t),e}(SQLayer);__reflect(TransparentLayer.prototype,"TransparentLayer");