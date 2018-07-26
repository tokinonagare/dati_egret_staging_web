
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/Common/ImageButtonUI.exml'] = window.ImageButtonUI = (function (_super) {
	__extends(ImageButtonUI, _super);
	function ImageButtonUI() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 90;
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
	}
	var _proto = ImageButtonUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.strokeAlpha = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 30;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "icon_back@2x_png";
		t.verticalCenter = 0;
		return t;
	};
	return ImageButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/TransparentLayerUI.exml'] = window.TransparentLayerUI = (function (_super) {
	__extends(TransparentLayerUI, _super);
	function TransparentLayerUI() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = TransparentLayerUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.4;
		t.percentHeight = 100;
		t.strokeAlpha = 0.4;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return TransparentLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/LoadingLayerUI.exml'] = window.LoadingLayerUI = (function (_super) {
	__extends(LoadingLayerUI, _super);
	function LoadingLayerUI() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._TransparentLayer1_i()];
	}
	var _proto = LoadingLayerUI.prototype;

	_proto._TransparentLayer1_i = function () {
		var t = new TransparentLayer();
		t.horizontalCenter = 0;
		t.skinName = "TransparentLayerUI";
		t.verticalCenter = 0;
		return t;
	};
	return LoadingLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/NavigationBarUI.exml'] = window.NavigationBarUI = (function (_super) {
	__extends(NavigationBarUI, _super);
	function NavigationBarUI() {
		_super.call(this);
		this.skinParts = ["titleLabel","leftButton"];
		
		this.height = 88;
		this.width = 750;
		this.elementsContent = [this.titleLabel_i(),this.leftButton_i()];
	}
	var _proto = NavigationBarUI.prototype;

	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "来玩答题";
		t.textColor = 0xffffff;
		t.verticalCenter = 0;
		return t;
	};
	_proto.leftButton_i = function () {
		var t = new eui.Button();
		this.leftButton = t;
		t.label = "";
		t.left = 0;
		t.skinName = "ImageButtonUI";
		t.verticalCenter = 0;
		return t;
	};
	return NavigationBarUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/PureTextButtonUI.exml'] = window.PureTextButtonUI = (function (_super) {
	__extends(PureTextButtonUI, _super);
	function PureTextButtonUI() {
		_super.call(this);
		this.skinParts = ["titleLabel"];
		
		this.height = 80;
		this.width = 150;
		this.elementsContent = [this.titleLabel_i()];
	}
	var _proto = PureTextButtonUI.prototype;

	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "类别";
		t.textColor = 0x999999;
		t.verticalCenter = 0;
		return t;
	};
	return PureTextButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/SQAlertButtonUI.exml'] = window.SQAlertButtonUI = (function (_super) {
	__extends(SQAlertButtonUI, _super);
	function SQAlertButtonUI() {
		_super.call(this);
		this.skinParts = ["background","titleLabel"];
		
		this.height = 80;
		this.width = 180;
		this.elementsContent = [this.background_i(),this.titleLabel_i()];
	}
	var _proto = SQAlertButtonUI.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x02b5f5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	return SQAlertButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Common/SQAlertUI.exml'] = window.SQAlertUI = (function (_super) {
	__extends(SQAlertUI, _super);
	function SQAlertUI() {
		_super.call(this);
		this.skinParts = ["titleLabel","messageLabel","buttonsGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._TransparentLayer1_i(),this._Panel1_i()];
	}
	var _proto = SQAlertUI.prototype;

	_proto._TransparentLayer1_i = function () {
		var t = new TransparentLayer();
		t.horizontalCenter = 0;
		t.skinName = "TransparentLayerUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Panel1_i = function () {
		var t = new eui.Panel();
		t.height = 338;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 572;
		t.elementsContent = [this._Rect1_i(),this.titleLabel_i(),this.messageLabel_i(),this.buttonsGroup_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x141414;
		t.top = 38;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "无法连接服务器";
		t.textColor = 0x882f00;
		t.verticalCenter = -29;
		return t;
	};
	_proto.buttonsGroup_i = function () {
		var t = new eui.Group();
		this.buttonsGroup = t;
		t.bottom = 25;
		t.height = 95;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 519;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return SQAlertUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOver/GameOverInfoItemUI.exml'] = window.GameOverInfoItemUI = (function (_super) {
	__extends(GameOverInfoItemUI, _super);
	function GameOverInfoItemUI() {
		_super.call(this);
		this.skinParts = ["titleLabel","valueLabel"];
		
		this.height = 80;
		this.width = 480;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = GameOverInfoItemUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.titleLabel_i(),this.valueLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "justify";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.size = 28;
		t.text = "答对题目";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 40;
		t.y = 22;
		return t;
	};
	_proto.valueLabel_i = function () {
		var t = new eui.Label();
		this.valueLabel = t;
		t.size = 28;
		t.text = "8";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.x = 50;
		t.y = 32;
		return t;
	};
	return GameOverInfoItemUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOver/GameOverSceneUI.exml'] = window.GameOverSceneUI = (function (_super) {
	__extends(GameOverSceneUI, _super);
	var GameOverSceneUI$Skin1 = 	(function (_super) {
		__extends(GameOverSceneUI$Skin1, _super);
		function GameOverSceneUI$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_game_over_continue_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameOverSceneUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_game_over_continue@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameOverSceneUI$Skin1;
	})(eui.Skin);

	function GameOverSceneUI() {
		_super.call(this);
		this.skinParts = ["continueButton","informationOne","informationTwo"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._TransparentLayer1_i(),this._Image1_i(),this.continueButton_i(),this.informationOne_i(),this.informationTwo_i()];
	}
	var _proto = GameOverSceneUI.prototype;

	_proto._TransparentLayer1_i = function () {
		var t = new TransparentLayer();
		t.horizontalCenter = 0;
		t.skinName = "TransparentLayerUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "img_game_over@2x_png";
		t.top = 370;
		return t;
	};
	_proto.continueButton_i = function () {
		var t = new eui.Button();
		this.continueButton = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 864;
		t.width = 420;
		t.skinName = GameOverSceneUI$Skin1;
		return t;
	};
	_proto.informationOne_i = function () {
		var t = new GameOverInfoItem();
		this.informationOne = t;
		t.skinName = "GameOverInfoItemUI";
		t.x = 138;
		t.y = 534;
		return t;
	};
	_proto.informationTwo_i = function () {
		var t = new GameOverInfoItem();
		this.informationTwo = t;
		t.skinName = "GameOverInfoItemUI";
		t.x = 138;
		t.y = 652;
		return t;
	};
	return GameOverSceneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchGame/LaunchGameSceneUI.exml'] = window.LaunchGameSceneUI = (function (_super) {
	__extends(LaunchGameSceneUI, _super);
	function LaunchGameSceneUI() {
		_super.call(this);
		this.skinParts = ["logoTween","descriptionLabel","logoImage"];
		
		this.height = 1334;
		this.width = 750;
		this.logoTween_i();
		this.elementsContent = [this._Image1_i(),this.descriptionLabel_i(),this.logoImage_i()];
		
		eui.Binding.$bindProperties(this, ["logoImage"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [430],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [435],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [430],[],this._Object3,"y");
	}
	var _proto = LaunchGameSceneUI.prototype;

	_proto.logoTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.logoTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_launch@2x_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.descriptionLabel_i = function () {
		var t = new eui.Label();
		this.descriptionLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "80%";
		t.textColor = 0xffffff;
		t.top = 1005;
		t.x = 181;
		return t;
	};
	_proto.logoImage_i = function () {
		var t = new eui.Image();
		this.logoImage = t;
		t.horizontalCenter = 0;
		t.source = "logo@2x_png";
		t.y = 430;
		return t;
	};
	return LaunchGameSceneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuestionLayerUI.exml'] = window.QuestionLayerUI = (function (_super) {
	__extends(QuestionLayerUI, _super);
	function QuestionLayerUI() {
		_super.call(this);
		this.skinParts = ["categoryLabel","progressLabel","timeLabel","questionLabel"];
		
		this.height = 416;
		this.width = 722;
		this.elementsContent = [this._Image1_i(),this.categoryLabel_i(),this.progressLabel_i(),this.timeLabel_i(),this.questionLabel_i()];
	}
	var _proto = QuestionLayerUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "img_problem@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.categoryLabel_i = function () {
		var t = new eui.Label();
		this.categoryLabel = t;
		t.left = 42;
		t.size = 34;
		t.text = "类别";
		t.textColor = 0x000000;
		t.top = 41;
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "5/8";
		t.textColor = 0x000000;
		t.top = 41;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.right = 42;
		t.size = 34;
		t.text = "17\"";
		t.textColor = 0x000000;
		t.top = 41;
		return t;
	};
	_proto.questionLabel_i = function () {
		var t = new eui.Label();
		this.questionLabel = t;
		t.height = 240;
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "这里显示问题是什么？";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 600;
		return t;
	};
	return QuestionLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizSceneBottomToolbarItemUI.exml'] = window.QuizSceneBottomToolbarItemUI = (function (_super) {
	__extends(QuizSceneBottomToolbarItemUI, _super);
	function QuizSceneBottomToolbarItemUI() {
		_super.call(this);
		this.skinParts = ["icon","titleLabel","descriptionLabel"];
		
		this.minHeight = 98;
		this.minWidth = 250;
		this.elementsContent = [this._Group2_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("icon","alpha",0.5)
				])
		];
	}
	var _proto = QuizSceneBottomToolbarItemUI.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.icon_i(),this._Group1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 1;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_bomb@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 150;
		t.x = 160;
		t.y = 9;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.titleLabel_i(),this.descriptionLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.size = 24;
		t.text = "炸弹";
		t.textColor = 0x666666;
		t.x = 120;
		t.y = 24;
		return t;
	};
	_proto.descriptionLabel_i = function () {
		var t = new eui.Label();
		this.descriptionLabel = t;
		t.size = 18;
		t.text = "去掉两个错误答案";
		t.textColor = 0x666666;
		t.x = 130;
		t.y = 34;
		return t;
	};
	return QuizSceneBottomToolbarItemUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizSceneBottomToolbarUI.exml'] = window.QuizSceneBottomToolbarUI = (function (_super) {
	__extends(QuizSceneBottomToolbarUI, _super);
	function QuizSceneBottomToolbarUI() {
		_super.call(this);
		this.skinParts = ["bombButton","skipButton","cover"];
		
		this.height = 98;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.cover_i()];
	}
	var _proto = QuizSceneBottomToolbarUI.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0xffffff;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.bombButton_i(),this._Rect2_i(),this.skipButton_i(),this._Button1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.bombButton_i = function () {
		var t = new QuizSceneBottomToolbarItem();
		this.bombButton = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "QuizSceneBottomToolbarItemUI";
		t.width = 249;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe4e4e4;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xe4e4e4;
		t.width = 1.5;
		t.x = 273;
		t.y = 31;
		return t;
	};
	_proto.skipButton_i = function () {
		var t = new QuizSceneBottomToolbarItem();
		this.skipButton = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "QuizSceneBottomToolbarItemUI";
		t.width = 249;
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "Button";
		t.x = 30;
		t.y = 13;
		return t;
	};
	_proto.cover_i = function () {
		var t = new eui.Rect();
		this.cover = t;
		t.fillAlpha = 0.6;
		t.fillColor = 0xaaaaaa;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return QuizSceneBottomToolbarUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizAnswerButtonUI.exml'] = window.QuizAnswerButtonUI = (function (_super) {
	__extends(QuizAnswerButtonUI, _super);
	function QuizAnswerButtonUI() {
		_super.call(this);
		this.skinParts = ["image","titleLabel","cover"];
		
		this.minHeight = 88;
		this.minWidth = 702;
		this.elementsContent = [this.image_i(),this.titleLabel_i(),this.cover_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("image","source","btn_answer_on@2x_png")
				])
			,
			new eui.State ("disable",
				[
					new eui.SetProperty("image","source","btn_answer@2x_png")
				])
			,
			new eui.State ("wrong",
				[
					new eui.SetProperty("image","source","btn_wrong_answer@2x_png"),
					new eui.SetProperty("titleLabel","textColor",0xffffff)
				])
			,
			new eui.State ("correct",
				[
					new eui.SetProperty("image","source","btn_correct_answer@2x_png"),
					new eui.SetProperty("titleLabel","textColor",0xffffff)
				])
		];
	}
	var _proto = QuizAnswerButtonUI.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "btn_answer@2x_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.cover_i = function () {
		var t = new eui.Rect();
		this.cover = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.6;
		t.fillColor = 0xaaaaaa;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return QuizAnswerButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizAnswerLayerUI.exml'] = window.QuizAnswerLayerUI = (function (_super) {
	__extends(QuizAnswerLayerUI, _super);
	function QuizAnswerLayerUI() {
		_super.call(this);
		this.skinParts = ["answerOne","answerTwo","answerThree","answerFour"];
		
		this.height = 526;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = QuizAnswerLayerUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.answerOne_i(),this.answerTwo_i(),this.answerThree_i(),this.answerFour_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 58;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.answerOne_i = function () {
		var t = new QuizAnswerButton();
		this.answerOne = t;
		t.label = "";
		t.skinName = "QuizAnswerButtonUI";
		t.x = 47;
		t.y = 55;
		return t;
	};
	_proto.answerTwo_i = function () {
		var t = new QuizAnswerButton();
		this.answerTwo = t;
		t.label = "Button";
		t.skinName = "QuizAnswerButtonUI";
		t.x = 57;
		t.y = 65;
		return t;
	};
	_proto.answerThree_i = function () {
		var t = new QuizAnswerButton();
		this.answerThree = t;
		t.label = "Button";
		t.skinName = "QuizAnswerButtonUI";
		t.x = 67;
		t.y = 75;
		return t;
	};
	_proto.answerFour_i = function () {
		var t = new QuizAnswerButton();
		this.answerFour = t;
		t.label = "Button";
		t.skinName = "QuizAnswerButtonUI";
		t.x = 77;
		t.y = 85;
		return t;
	};
	return QuizAnswerLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizFinishedLayerUI.exml'] = window.QuizFinishedLayerUI = (function (_super) {
	__extends(QuizFinishedLayerUI, _super);
	var QuizFinishedLayerUI$Skin2 = 	(function (_super) {
		__extends(QuizFinishedLayerUI$Skin2, _super);
		function QuizFinishedLayerUI$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_good_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuizFinishedLayerUI$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_good@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuizFinishedLayerUI$Skin2;
	})(eui.Skin);

	var QuizFinishedLayerUI$Skin3 = 	(function (_super) {
		__extends(QuizFinishedLayerUI$Skin3, _super);
		function QuizFinishedLayerUI$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_bad_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuizFinishedLayerUI$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_bad@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuizFinishedLayerUI$Skin3;
	})(eui.Skin);

	var QuizFinishedLayerUI$Skin4 = 	(function (_super) {
		__extends(QuizFinishedLayerUI$Skin4, _super);
		function QuizFinishedLayerUI$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_reply_1_on@2x_png"),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuizFinishedLayerUI$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_reply_1@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 26;
			t.textColor = 0x4074bd;
			t.verticalCenter = 2;
			return t;
		};
		return QuizFinishedLayerUI$Skin4;
	})(eui.Skin);

	var QuizFinishedLayerUI$Skin5 = 	(function (_super) {
		__extends(QuizFinishedLayerUI$Skin5, _super);
		function QuizFinishedLayerUI$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_reply_2_on@2x_png"),
						new eui.SetProperty("labelDisplay","textColor",0xffffff)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuizFinishedLayerUI$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_reply_2@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 26;
			t.textColor = 0x4074bd;
			t.verticalCenter = 2;
			return t;
		};
		return QuizFinishedLayerUI$Skin5;
	})(eui.Skin);

	var QuizFinishedLayerUI$Skin6 = 	(function (_super) {
		__extends(QuizFinishedLayerUI$Skin6, _super);
		function QuizFinishedLayerUI$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_continue_on@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QuizFinishedLayerUI$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_continue@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return QuizFinishedLayerUI$Skin6;
	})(eui.Skin);

	function QuizFinishedLayerUI() {
		_super.call(this);
		this.skinParts = ["upButton","downButton","thumbsGroup","tagTitleLabel","leftTagButton","rightTagButton","tagsGroup","continueButton"];
		
		this.height = 526;
		this.width = 750;
		this.elementsContent = [this.thumbsGroup_i(),this.tagsGroup_i(),this.continueButton_i()];
	}
	var _proto = QuizFinishedLayerUI.prototype;

	_proto.thumbsGroup_i = function () {
		var t = new eui.Group();
		this.thumbsGroup = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = -35;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.upButton_i(),this.downButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 150;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.upButton_i = function () {
		var t = new eui.Button();
		this.upButton = t;
		t.label = "";
		t.x = 111;
		t.y = 39;
		t.skinName = QuizFinishedLayerUI$Skin2;
		return t;
	};
	_proto.downButton_i = function () {
		var t = new eui.Button();
		this.downButton = t;
		t.label = "";
		t.x = 121;
		t.y = 49;
		t.skinName = QuizFinishedLayerUI$Skin3;
		return t;
	};
	_proto.tagsGroup_i = function () {
		var t = new eui.Group();
		this.tagsGroup = t;
		t.height = 276;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 700;
		t.elementsContent = [this.tagTitleLabel_i(),this._Group1_i()];
		return t;
	};
	_proto.tagTitleLabel_i = function () {
		var t = new eui.Label();
		this.tagTitleLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "Label";
		t.textColor = 0x4074bd;
		t.verticalCenter = -57;
		t.x = 313;
		t.y = 68;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 500;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.leftTagButton_i(),this.rightTagButton_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.leftTagButton_i = function () {
		var t = new eui.Button();
		this.leftTagButton = t;
		t.horizontalCenter = -120;
		t.label = "有意思";
		t.verticalCenter = 0;
		t.skinName = QuizFinishedLayerUI$Skin4;
		return t;
	};
	_proto.rightTagButton_i = function () {
		var t = new eui.Button();
		this.rightTagButton = t;
		t.horizontalCenter = 120;
		t.label = "没意思";
		t.verticalCenter = 0;
		t.skinName = QuizFinishedLayerUI$Skin5;
		return t;
	};
	_proto.continueButton_i = function () {
		var t = new eui.Button();
		this.continueButton = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 358;
		t.skinName = QuizFinishedLayerUI$Skin6;
		return t;
	};
	return QuizFinishedLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizDashboardUI.exml'] = window.QuizDashboardUI = (function (_super) {
	__extends(QuizDashboardUI, _super);
	function QuizDashboardUI() {
		_super.call(this);
		this.skinParts = ["quizAnswerLayer","quizFinishedLayer"];
		
		this.height = 526;
		this.width = 1500;
		this.elementsContent = [this.quizAnswerLayer_i(),this.quizFinishedLayer_i()];
	}
	var _proto = QuizDashboardUI.prototype;

	_proto.quizAnswerLayer_i = function () {
		var t = new QuizAnswerLayer();
		this.quizAnswerLayer = t;
		t.left = 0;
		t.skinName = "QuizAnswerLayerUI";
		t.verticalCenter = 0;
		return t;
	};
	_proto.quizFinishedLayer_i = function () {
		var t = new QuizFinishedLayer();
		this.quizFinishedLayer = t;
		t.right = 0;
		t.skinName = "QuizFinishedLayerUI";
		t.verticalCenter = 0;
		return t;
	};
	return QuizDashboardUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/QuizSceneUI.exml'] = window.QuizSceneUI = (function (_super) {
	__extends(QuizSceneUI, _super);
	function QuizSceneUI() {
		_super.call(this);
		this.skinParts = ["dashboardTween","questionLayer","bottomToolbar","navigationBar","quizDashboard"];
		
		this.height = 1334;
		this.width = 750;
		this.dashboardTween_i();
		this.elementsContent = [this._Image1_i(),this.questionLayer_i(),this.bottomToolbar_i(),this.navigationBar_i(),this.quizDashboard_i()];
		
		eui.Binding.$bindProperties(this, ["quizDashboard"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [-750],[],this._Object2,"x");
	}
	var _proto = QuizSceneUI.prototype;

	_proto.dashboardTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dashboardTween = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_tu@2x_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.questionLayer_i = function () {
		var t = new QuestionLayer();
		this.questionLayer = t;
		t.horizontalCenter = 0;
		t.skinName = "QuestionLayerUI";
		t.top = 101;
		return t;
	};
	_proto.bottomToolbar_i = function () {
		var t = new QuizSceneBottomToolbar();
		this.bottomToolbar = t;
		t.horizontalCenter = 0;
		t.skinName = "QuizSceneBottomToolbarUI";
		t.y = 1236;
		return t;
	};
	_proto.navigationBar_i = function () {
		var t = new NavigationBar();
		this.navigationBar = t;
		t.skinName = "NavigationBarUI";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.quizDashboard_i = function () {
		var t = new QuizDashboardLayer();
		this.quizDashboard = t;
		t.bottom = 198;
		t.skinName = "QuizDashboardUI";
		t.x = 0;
		return t;
	};
	return QuizSceneUI;
})(eui.Skin);