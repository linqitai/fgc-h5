<style scoped lang="scss">
	@import '~@/assets/scss/index.scss';
    .agreementPage{
        @include pageHaveHeight4Scroll();
        box-sizing: border-box;
		padding: $boxPadding2;
		// padding: 100px $boxPadding2 $boxPadding2 $boxPadding2;
		.coontent{
			color: $mainTextColor;
			font-size: 12px;
			justify-content: space-between;
			letter-spacing: 1px;
			line-height: 1.3em;
		}
    }
    
</style>
<template>
	<div class="agreementPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				用户协议
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="coontent">
			特别提示
			<br>
			感恩链平台在此特别提醒您（用户）在注册成为用户之前，请认真阅读本《用户协议》（以下简称“协议”），确保您充分理解本协议中各条款。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束。
			<br><br>
			一、帐号注册
			<br>
			1、用户在使用本服务前需要注册一个“感恩链”帐号。“感恩链”帐号应当使用手机号码绑定注册，请用户使用尚未与“感恩链”帐号绑定的手机号码，以及未被感恩链平台根据本协议封禁的手机号码注册“感恩链”帐号。
			<br>
			2、在用户注册及使用本服务时，感恩链平台需要通过实名认证记录个人信息以便感恩链平台可以在必要时联系用户，或为用户提供更好的使用体验。感恩链平台同意对这些信息的使用将受限于第三条用户个人隐私信息保护的约束。
			<br><br>
			二、服务内容
			<br>
			1、感恩链平台上的用户可以相互交换矿石，矿石为平台发行的虚拟积分，会员之间转增交换，交换时需收取服务费（用矿石或者感恩券，可选择性）。
			<br>
			2、感恩链平台在积累一定的用户流量后，会设立类似爱心、水滴、轻松筹的服务（一下简称“感恩筹”），帮助生活经济上出现突发困难的用户，解决燃眉之急。
			<br>
			3、感恩链平台在积累一定的用户流量后，开通商城，让商家入驻，为商户们提高产品销量。
			<br><br>
			三、用户个人信息保护
			<br>
			1、用户在注册帐号或使用本服务的过程中，可能需要填写或提交一些必要的个人信息，如法律法规、规章规范性文件（以下称“法律法规”）规定的需要填写的身份信息。如用户提交的信息不完整或不符合法律法规的规定，则用户可能无法使用本服务或在使用本服务的过程中受到限制。
			<br>
			2、用户个人信息包括：1）用户自行提供的用户个人信息（如注册时填写的手机号码，使用服务时提供的共享信息等）；2）其他方分享的用户个人信息；3）感恩链平台为提供服务而合法收集的用户必要个人信息。
			<br>
			3、尊重用户个人信息的私有性是感恩链平台的一贯制度，感恩链平台将采取技术措施和其他必要措施，确保用户个人信息安全，防止在本服务中收集的用户个人信息泄露、毁损或丢失。在发生前述情形或者感恩链平台发现存在发生前述情形的可能时，感恩链平台将及时采取补救措施并告知用户，用户如发现存在前述情形亦需立即与感恩链平台联系
			<br>
			4、感恩链平台未经用户同意不向任何第三方公开、透露用户个人隐私信息。但以下特定情形除外：
			<br>
			(1)感恩链平台根据法律法规规定或有权机关的指示提供用户的个人隐私信息；
			<br>
			(2)由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因感恩链平台原因导致的个人隐私信息的泄露；
			<br>
			(3)用户自行向第三方公开其个人隐私信息；
			<br>
			(4)用户与感恩链平台及合作单位之间就用户个人隐私信息的使用公开达成约定，感恩链平台因此向合作单位公开用户个人隐私信息；
			<br>
			(5)任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露；
			<br>
			(6)用户个人信息已经经过处理无法识别特定个人且不能复原。
			<br>
			5、用户同意感恩链平台可在以下事项中使用用户的个人隐私信息：
			<br>
			(1)感恩链平台向用户及时发送重要通知，如软件更新、本协议条款的变更；
			<br>
			(2)感恩链平台内部进行审计、数据分析和研究等，以改进感恩链平台的产品、服务和与用户之间的沟通；
			<br>
			(3)依本协议约定，感恩链平台管理、审查用户信息及进行处理措施；
			<br>
			(4)适用法律法规规定的其他事项。
			<br>
			除上述事项外，如未取得用户事先同意，感恩链平台不会将用户个人隐私信息使用于任何其他用途。
			<br>
			6、感恩链平台重视对未成年人的保护。感恩链平台将依赖用户提供的个人信息判断用户是否为未成年人。任何18岁以下的未成年人均不得注册帐号或使用本服务
			<br><br>
			四、内容规范
			<br>
			1、本条所述内容是指用户使用本服务过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于帐号头像、名称、用户说明等注册信息及认证资料，或文字、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用帐号或本服务所产生的内容。
			<br>
			2、用户不得利用“感恩链”帐号或本服务制作、上载、复制、发布、传播如下法律、法规和政策禁止的内容：
			<br>
			(1) 反对宪法所确定的基本原则的；
			<br>
			(2) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
			<br>
			(3) 损害国家荣誉和利益的；
			<br>
			(4) 煽动民族仇恨、民族歧视，破坏民族团结的；
			<br>
			(5) 破坏国家宗教政策，宣扬邪教和封建迷信的；
			<br>
			(6) 散布谣言，扰乱社会秩序，破坏社会稳定的；
			<br>
			(7) 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
			<br>
			(8) 侮辱或者诽谤他人，侵害他人合法权益的；
			<br>
			(9) 不遵守法律法规底线、社会主义制度底线、国家利益底线、公民合法权益底线、社会公共秩序底线、道德风尚底线和信息真实性底线的“七条底线”要求的；
			<br>
			(10) 含有法律、行政法规禁止的其他内容的信息。
			<br>
			3、用户不得利用“感恩链”帐号或本服务制作、上载、复制、发布、传播如下干扰“感恩链”正常运营，以及侵犯其他用户或第三方合法权益的内容：
			<br>
			(1) 含有任何性或性暗示的；
			<br>
			(2) 含有辱骂、恐吓、威胁内容的；
			<br>
			(3) 含有骚扰、垃圾广告、恶意信息、诱骗信息的；
			<br>
			(4) 涉及他人隐私、个人信息或资料的；
			<br>
			(5) 侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的；
			<br>
			(6) 含有其他干扰本服务正常运营和侵犯其他用户或第三方合法权益内容的信息。
			<br><br>
			五、使用规则
			<br>
			1、用户在本服务中或通过本服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表感恩链平台的观点、立场或政策，感恩链平台对此不承担任何责任。
			<br>
			2、用户不得利用“感恩链”帐号或本服务进行如下行为：
			<br>
			(1) 提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义的；
			<br>
			(2) 强制、诱导其他用户关注、点击链接页面或分享信息的；
			<br>
			(3) 虚构事实、隐瞒真相以误导、欺骗他人的；
			<br>
			(4) 利用技术手段批量建立虚假帐号的；
			<br>
			(5) 利用“感恩链”帐号或本服务从事任何违法犯罪活动的；
			<br>
			(6) 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；
			<br>
			(7) 其他违反法律法规规定、侵犯其他用户合法权益、干扰“感恩链”正常运营或感恩链平台未明示授权的行为。
			<br>
			3、用户须对利用“感恩链”帐号或本服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与感恩链平台无关。如因此给感恩链平台或第三方造成损害的，用户应当依法予以赔偿。
			<br>
			4、感恩链平台提供的服务中可能包括广告，用户同意在使用过程中显示感恩链平台和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对依该广告信息进行的交易负责，对用户因依该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，感恩链平台不承担任何责任。
			<br>
			5、除非感恩链平台书面许可，用户不得从事下列任一行为：
			<br>
			(1)对软件进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现软件的源代码；
			<br>
			(2)对感恩链平台拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；
			 <br>
			(3)对软件或者软件运行过程中释放到任何终端内存中的数据、软件运行过程中客户端与服务器端的交互数据，以及软件运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经感恩链平台授权的第三方工具/服务接入软件和相关系统；
			 <br>
			(4)通过修改或伪造软件运行中的指令、数据，增加、删减、变动软件的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的； 
			<br>
			(5) 通过非感恩链平台开发、授权的第三方软件、插件、外挂、系统，登录或使用感恩链平台软件及服务，或制作、发布、传播非感恩链平台开发、授权的第三方软件、插件、外挂、系统。
			<br>
			6、如您发现“感恩链”软件内存在任何侵犯您权利的内容，请立即通过感恩链的“留言板”反馈给平台，提供您相关权利的初步证据，平台将会根据当地法律法规及时处理您的投诉。如您在“感恩链平台”发布的内容被相关权利人投诉侵权，您也可以通过向assist_china@yeah.net提交申诉书面说明，及相关权利证明材料，来向平台进行申诉，平台同样将会根据当地法律法规及时处理您的申诉。
			<br>
			7、若平台发现用户恶意获取他人身份信息进行实名认证，平台将有权将其封号并进行反向实名认证，情节严重这平台将追究其法律责任；
			<br><br>
			六、虚拟产品
			<br>
			1、感恩链平台将在“感恩链”平台发行虚拟产物，即矿石。该矿石增值服务的价格均以矿石为单位，具体价格信息将由市场上的用户共识度决定并在相关服务页面上显示。
			<br>
			2、用户认证已开通感恩链账户且完成任务中心的基础任务，即可进行矿石交换，可在设置页面查询到矿石余数、交换记录和使用记录。矿石相关信息将为公开信息，受全体用户监督与审查。
			<br>
			4、用户可以通过支付宝或其他“感恩链”平台提供的购买途径为矿石账户进行交换。用户确认不会以非法方式或者使用非平台所指定的交换途径进行购买,如果用户违规使用非感恩链平台认可的交换途径非法购买/购买矿石，则感恩链平台不保证购买顺利或正确完成，若因此造成用户权益受损，感恩链平台将不会作出任何补偿或赔偿，感恩链平台同时保留随时终止用户感恩链账号资格及使用各项购买服务的权利，并进行相应惩罚。
			<br>
			5、用户确认在进行交换前已经仔细确认过自己的账号并仔细选择了相关操作选项，若因用户自身输入账号错误、操作不当或不了解购买计费方式等因素造成错选购买种类数量等情形而损害自身权益的，感恩链平台将不会作出任何补偿或赔偿。
			<br>
			6、感恩链平台有权基于交易安全等方面的考虑不时设定或修改涉及交易的相关事项，包括但不限于交易限额、交易次数等。用户了解并确认感恩链平台的前述设定或修改可能对用户的交易产生一定的不便，用户对此没有异议。
			<br>
			9、用户确认，除法律法规明确规定或本协议另有约定外，用户已购买的矿石不得向出售方申请退款。
			<br>
			10、因用户自身的原因导致感恩链平台无法提供矿石购买服务或提供矿石购买服务时发生任何错误而产生的任何损失或责任，由用户自行负责，感恩链平台不承担责任，包括但不限于：
			<br>
			(1) 因用户的感恩链账号丢失、被封禁或冻结；
			<br>
			(2) 用户将密码告知他人导致的财产损失；
			<br>
			(3) 因用户绑定的第三方支付机构账户的原因导致的任何损失或责任；
			<br>
			(4) 其他用户故意或者重大过失或者违反法律法规导致的财产损失。
			<br>
			11、用户在使用感恩链平台提供的服务时，如出现违反国家法律法规、本协议约定或其他本平台对用户的管理规定的情形，感恩链平台有权暂时或永久封禁用户的账号。账号封禁后至解禁（如有）前，用户账户上的剩余矿石将被暂时冻结或全部扣除，不可继续用于虚拟产品或服务，同时不予返还用户购买矿石时的现金价值。
			<br>
			12、用户确认并同意如用户主动注销账号，则用户已购买到账的矿石视为自动放弃，感恩链平台不予返还相应的现金价值，也不会作出任何补偿。
			<br>
			13、矿石价值基于产品商提供的产品兑换比例，平台不保护任何场外黑市价格，如果想快速获得更多矿石，可点击发布需求在区间价格内挂单交换。
			<br><br>
			七、账户管理
			<br>
			1、 “感恩链”帐号的所有权归感恩链平台所有，用户完成申请注册手续后，获得“感恩链”帐号的使用权，该使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖。感恩链平台因经营需要，有权回收用户的“感恩链”帐号。
			<br>
			2、用户可以通过1）查看与编辑个人资料页，2）“设置”页面里的“账号与安全”页面来查询、更改、删除、注销“感恩链”帐户上的个人资料、注册信息及传送内容等，但需注意，删除有关信息的同时也会删除用户储存在系统中的文字和图片。用户需承担该风险。
			<br>
			3、用户有责任妥善保管注册帐号信息及帐号密码的安全，因用户保管不善可能导致遭受盗号或密码失窃，责任由用户自行承担。用户需要对注册帐号以及密码下的行为承担法律责任。用户同意在任何情况下不使用其他用户的帐号或密码。在用户怀疑他人使用其帐号或密码时，用户同意立即通知感恩链平台。
			<br>
			4、用户应遵守本协议的各项条款，正确、适当地使用本服务，如因用户违反本协议中的任何条款，感恩链平台在通知用户后有权依据协议中断或终止对违约用户“感恩链”帐号提供服务。同时，感恩链平台保留在任何时候收回“感恩链”帐号、用户名的权利。
			<br>
			5、如用户注册“感恩链”帐号后一个月不登录，感恩链平台有权收回该帐号，包括但不限于注销、删除、禁用等以免造成资源浪费，由此造成的不利后果由用户自行承担，平台不承担任何用户损失责任。
			<br>
			6、用户可以通过“设置”页面里的“退出登录”页面来进行账号退出服务
			<br><br>
			八、数据储存
			<br>
			1、感恩链平台不对用户在本服务中相关数据的删除或储存失败负责。
			<br>
			2、感恩链平台可以根据实际情况自行决定用户在本服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。用户可根据自己的需要自行备份本服务中的相关数据。
			<br>
			3、如用户停止使用本服务或本服务终止，感恩链平台可以从服务器上永久地删除用户的数据。本服务停止、终止后，感恩链平台没有义务向用户返还任何数据。
			<br><br>
			九、风险承担
			<br>
			1、用户理解并同意，“感恩链”仅为用户提供信息分享、传送及获取的平台，用户必须为自己注册帐号下的一切行为负责，包括用户所传送的任何内容以及由此产生的任何后果。用户应对“感恩链”及本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。感恩链平台无法且不会对因用户行为而导致的任何损失或损害承担责任。
			<br>
			如果用户发现任何人违反本协议约定或以其他不当的方式使用本服务，请立即向感恩链平台“在线客服”进行举报或投诉，感恩链平台将依本协议约定进行处理。
			<br>
			2、用户理解并同意，因业务发展需要，感恩链平台保留单方面对本服务的全部或部分服务内容变更、暂停、终止或撤销的权利，用户需承担此风险。
			<br><br>
			十、知识产权声明
			<br>
			1、除本服务中涉及广告的知识产权由相应广告商享有外，感恩链平台在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权均归感恩链平台所有，但用户在使用本服务前对自己发布的内容已合法取得知识产权的除外。
			<br>
			2、除另有特别声明外，感恩链平台提供本服务时所依托软件的著作权、专利权及其他知识产权均归感恩链平台所有。
			<br>
			3、感恩链平台在本服务中所涉及的图形、文字或其组成，以及其他感恩链平台标志及产品、服务名称（以下统称“感恩链平台标识”），其著作权或商标权归感恩链平台所有。未经感恩链平台事先书面同意，用户不得将感恩链平台标识以任何方式展示或使用或作其他处理，也不得向他人表明用户有权展示、使用、或其他有权处理感恩链平台标识的行为。
			<br>
			4、上述及其他任何感恩链平台或相关广告商依法拥有的知识产权均受到法律保护，未经感恩链平台或相关广告商书面许可，用户不得以任何形式进行使用或创造相关衍生作品。
			<br>
			5、用户在使用感恩链服务时发表上传的文字、图片、视频、音频等信息，此部分信息的知识产权归用户，责任由用户承担。但用户的发表、上传行为视为对感恩链平台的授权，用户理解并同意授予感恩链平台及其关联平台全球范围内完全免费、不可撤销、独家、永久、可转授权和可再许可的权利，包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及《著作权法》规定的由著作权人享有的其他著作财产权利及邻接权利。感恩链平台可自行选择是否使用以及使用方式，包括但不限于将前述信息在感恩链平台旗下的服务平台上使用与传播，将上述信息再次编辑后使用，以及由感恩链平台授权给合作方使用、编辑与传播等。
			<br><br>
			十一、法律责任
			<br>
			1、如果感恩链平台发现或收到他人举报或投诉用户违反本协议约定的，感恩链平台有权不经通知随时对相关内容，包括但不限于用户资料、聊天记录进行审查、删除，并视情节轻重对违规帐号处以包括但不限于警告、帐号封禁 、设备封禁 、功能封禁 的处罚，且通知用户处理结果。
			<br>
			2、因违反用户协议被封禁的用户，可以自行到APP个人中心意见反馈提交申诉解封。被封禁用户可向感恩链平台网站相关页面提交申诉，感恩链平台将对申诉进行审查，并自行合理判断决定是否变更处罚措施。
			<br>
			3、用户理解并同意，感恩链平台有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。
			<br>
			4、用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿感恩链平台与合作平台、关联平台，并使之免受损害。
			<br><br>
			十二、不可抗力及其他免责事由
			<br>
			1、用户理解并确认，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、瘟疫流行和风暴等以及社会事件如战争、动乱、政府行为等。出现上述情况时，感恩链平台将努力在第一时间与相关单位配合，及时进行修复，但是由此给用户或第三方造成的损失，感恩链平台及合作单位在法律允许的范围内免责。
			<br>
			2、本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰，如他人利用用户的资料，造成现实生活中的骚扰；用户下载安装的其它软件或访问的其他网站中含有“特洛伊木马”等病毒，威胁到用户的计算机信息和数据的安全，继而影响本服务的正常使用等等。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。
			<br>
			3、用户理解并确认，本服务存在因不可抗力、计算机病毒或黑客攻击、系统不稳定、用户所在位置、用户关机以及其他任何技术、互联网络、通信线路原因等造成的服务中断或不能满足用户要求的风险，因此导致的用户或第三方任何损失，感恩链平台不承担任何责任。
			<br>
			4、用户理解并确认，在使用本服务过程中存在来自任何他人的包括误导性的、欺骗性的、威胁性的、诽谤性的、令人反感的或非法的信息，或侵犯他人权利的匿名或冒名的信息，以及伴随该等信息的行为，因此导致的用户或第三方的任何损失，感恩链平台不承担任何责任。
			<br>
			5、用户理解并确认，感恩链平台需要定期或不定期地对“感恩链”平台或相关的设备进行检修或者维护，如因此类情况而造成服务在合理时间内的中断，感恩链平台无需为此承担任何责任，但感恩链平台应事先进行通告。
			<br>
			6、感恩链平台依据法律法规、本协议约定获得处理违法违规或违约内容的权利，该权利不构成感恩链平台的义务或承诺，感恩链平台不能保证及时发现违法违规或违约行为或进行相应处理。
			<br>
			7、用户理解并确认，对于感恩链平台向用户提供的下列产品或者服务的质量缺陷及其引发的任何损失，感恩链平台无需承担任何责任：
			<br>
			(1) 感恩链平台向用户免费提供的服务；
			<br>
			(2) 感恩链平台向用户赠送的任何产品或者服务。
			<br>
			8、在任何情况下，感恩链平台均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因用户使用“感恩链”或本服务而遭受的利润损失，承担责任（即使感恩链平台已被告知该等损失的可能性亦然）。尽管本协议中可能含有相悖的规定，感恩链平台对用户承担的全部责任，无论因何原因或何种行为方式，始终不超过用户因使用感恩链平台提供的服务而支付给感恩链平台的费用(如有)。
			<br><br>
			十三、服务的变更、中断、终止
			<br>
			1、鉴于网络服务的特殊性，用户同意感恩链平台有权随时变更、中断或终止部分或全部的服务（包括收费服务）。感恩链平台变更、中断或终止的服务，感恩链平台应当在变更、中断或终止之前通知用户，并应向受影响的用户提供基于矿石兑换产品实时比例相应的替代性的服务；包括不限于产品、旅游、广告服务。
			<br>
			2、如发生下列任何一种情形，感恩链平台有权变更、中断或终止向用户提供的免费服务或收费服务，而无需对用户或任何第三方承担任何责任：
			<br>
			(1) 根据法律规定用户应提交真实信息，而用户提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；
			<br>
			(2) 用户违反相关法律法规或本协议的约定；
			<br>
			(3) 按照法律规定或有权机关的要求；
			<br>
			(4) 出于安全的原因或其他必要的情形。
			<br><br>
			十四、其他
			<br>
			1、感恩链平台郑重提醒用户注意本协议中免除感恩链平台责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险
			<br>
			2、本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和感恩链平台之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交感恩链平台住所地有管辖权的人民法院管辖。
			<br>
			3、本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。
			<br>
			4、由于互联网高速发展，您与感恩链平台签署的本协议列明的条款可能并不能完整罗列并覆盖您与感恩链所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。因此，感恩链未来随时可能在原协议上不做修改补充的相关协议条款情况，如您使用感恩链平台服务，视为您同意上述补充协议条款。

		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	export default {
		data() {
			return {
				isShow: true
			}
		},
		components: {
			mHeader
		},
		mounted() {
			this.$utils.scrollTop();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
		}
	}
</script>
