
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
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = ImageButtonUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 30;
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
		this.skinParts = ["leftButton","titleLabel"];
		
		this.height = 88;
		this.width = 750;
		this.elementsContent = [this.leftButton_i(),this.titleLabel_i()];
	}
	var _proto = NavigationBarUI.prototype;

	_proto.leftButton_i = function () {
		var t = new PureTextButton();
		this.leftButton = t;
		t.left = 0;
		t.skinName = "ImageButtonUI";
		t.verticalCenter = 0;
		return t;
	};
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
		this.skinParts = ["continueButton","answerCorrectInfo","answerWrongInfo"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._TransparentLayer1_i(),this._Image1_i(),this.continueButton_i(),this.answerCorrectInfo_i(),this.answerWrongInfo_i()];
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
	_proto.answerCorrectInfo_i = function () {
		var t = new GameOverInfoItem();
		this.answerCorrectInfo = t;
		t.skinName = "GameOverInfoItemUI";
		t.x = 138;
		t.y = 534;
		return t;
	};
	_proto.answerWrongInfo_i = function () {
		var t = new GameOverInfoItem();
		this.answerWrongInfo = t;
		t.skinName = "GameOverInfoItemUI";
		t.x = 138;
		t.y = 652;
		return t;
	};
	return GameOverSceneUI;
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
		t.height = 80;
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
		this.skinParts = ["bombButton","chanceButton","skipButton"];
		
		this.height = 98;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
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
		t.elementsContent = [this.bombButton_i(),this._Rect2_i(),this.chanceButton_i(),this._Rect3_i(),this.skipButton_i()];
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
	_proto.chanceButton_i = function () {
		var t = new QuizSceneBottomToolbarItem();
		this.chanceButton = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "QuizSceneBottomToolbarItemUI";
		t.width = 249;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE4E4E4;
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xE4E4E4;
		t.width = 1.5;
		t.x = 283;
		t.y = 41;
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
	return QuizSceneBottomToolbarUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizDashboardButtonUI.exml'] = window.QuizDashboardButtonUI = (function (_super) {
	__extends(QuizDashboardButtonUI, _super);
	function QuizDashboardButtonUI() {
		_super.call(this);
		this.skinParts = ["image","titleLabel"];
		
		this.minHeight = 88;
		this.minWidth = 702;
		this.elementsContent = [this.image_i(),this.titleLabel_i()];
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
	var _proto = QuizDashboardButtonUI.prototype;

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
	return QuizDashboardButtonUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizDashboardUI.exml'] = window.QuizDashboardUI = (function (_super) {
	__extends(QuizDashboardUI, _super);
	function QuizDashboardUI() {
		_super.call(this);
		this.skinParts = ["answerOne","answerTwo","answerThree","answerFour"];
		
		this.height = 526;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = QuizDashboardUI.prototype;

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
		var t = new QuizDashboardButton();
		this.answerOne = t;
		t.label = "";
		t.skinName = "QuizDashboardButtonUI";
		t.x = 47;
		t.y = 55;
		return t;
	};
	_proto.answerTwo_i = function () {
		var t = new QuizDashboardButton();
		this.answerTwo = t;
		t.label = "Button";
		t.skinName = "QuizDashboardButtonUI";
		t.x = 57;
		t.y = 65;
		return t;
	};
	_proto.answerThree_i = function () {
		var t = new QuizDashboardButton();
		this.answerThree = t;
		t.label = "Button";
		t.skinName = "QuizDashboardButtonUI";
		t.x = 67;
		t.y = 75;
		return t;
	};
	_proto.answerFour_i = function () {
		var t = new QuizDashboardButton();
		this.answerFour = t;
		t.label = "Button";
		t.skinName = "QuizDashboardButtonUI";
		t.x = 77;
		t.y = 85;
		return t;
	};
	return QuizDashboardUI;
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
						new eui.SetProperty("_Image1","source","btn_continue_on@2x_png")
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
		return QuizFinishedLayerUI$Skin4;
	})(eui.Skin);

	function QuizFinishedLayerUI() {
		_super.call(this);
		this.skinParts = ["approveButton","disapproveButton","continueButton","tagList"];
		
		this.height = 526;
		this.width = 750;
		this.elementsContent = [this._Group1_i(),this.continueButton_i(),this.tagList_i()];
	}
	var _proto = QuizFinishedLayerUI.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.approveButton_i(),this.disapproveButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 150;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.approveButton_i = function () {
		var t = new eui.ToggleSwitch();
		this.approveButton = t;
		t.label = "";
		t.x = 591;
		t.y = 33;
		t.skinName = QuizFinishedLayerUI$Skin2;
		return t;
	};
	_proto.disapproveButton_i = function () {
		var t = new eui.ToggleSwitch();
		this.disapproveButton = t;
		t.label = "";
		t.x = 601;
		t.y = 43;
		t.skinName = QuizFinishedLayerUI$Skin3;
		return t;
	};
	_proto.continueButton_i = function () {
		var t = new eui.Button();
		this.continueButton = t;
		t.height = 88;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 358;
		t.skinName = QuizFinishedLayerUI$Skin4;
		return t;
	};
	_proto.tagList_i = function () {
		var t = new eui.List();
		this.tagList = t;
		t.height = 200;
		t.horizontalCenter = 0;
		t.verticalCenter = -35;
		t.width = 500;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.columnWidth = 180;
		t.horizontalAlign = "center";
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.requestedColumnCount = 2;
		t.requestedRowCount = 2;
		t.rowAlign = "justifyUsingHeight";
		t.rowHeight = 66;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	return QuizFinishedLayerUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/QuizSceneUI.exml'] = window.QuizSceneUI = (function (_super) {
	__extends(QuizSceneUI, _super);
	function QuizSceneUI() {
		_super.call(this);
		this.skinParts = ["dashboardTweenGroup","questionLayer","bottomToolbar","navigationBar","dashboard","quizFinishedLayer","dashboardGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.dashboardTweenGroup_i();
		this.elementsContent = [this._Image1_i(),this.questionLayer_i(),this.bottomToolbar_i(),this.navigationBar_i(),this.dashboardGroup_i()];
		
		eui.Binding.$bindProperties(this, ["dashboardGroup"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [-750],[],this._Object2,"x");
	}
	var _proto = QuizSceneUI.prototype;

	_proto.dashboardTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.dashboardTweenGroup = t;
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
		t.duration = 200;
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
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "QuizSceneBottomToolbarUI";
		t.visible = false;
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
	_proto.dashboardGroup_i = function () {
		var t = new eui.Group();
		this.dashboardGroup = t;
		t.bottom = 198;
		t.height = 526;
		t.width = 1500;
		t.x = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.dashboard_i(),this.quizFinishedLayer_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.dashboard_i = function () {
		var t = new QuizDashboard();
		this.dashboard = t;
		t.skinName = "QuizDashboardUI";
		t.x = 145;
		t.y = 154;
		return t;
	};
	_proto.quizFinishedLayer_i = function () {
		var t = new QuizFinishedLayer();
		this.quizFinishedLayer = t;
		t.skinName = "QuizFinishedLayerUI";
		t.x = 127;
		t.y = 694;
		return t;
	};
	return QuizSceneUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/QuizScene/View/QuizTagItemUI.exml'] = window.QuizTagItemUI = (function (_super) {
	__extends(QuizTagItemUI, _super);
	function QuizTagItemUI() {
		_super.call(this);
		this.skinParts = ["image"];
		
		this.height = 66;
		this.width = 180;
		this.elementsContent = [this.image_i()];
	}
	var _proto = QuizTagItemUI.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 98;
		t.horizontalCenter = 0;
		t.source = "btn_good_1@2x_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return QuizTagItemUI;
})(eui.Skin);