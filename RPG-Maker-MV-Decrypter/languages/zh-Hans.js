var lang_zh_hans = { // Ignore this line

	// ===== Base-Data - Please fill these out =====
	'languageName': 'Simplified Chinese', // Name of your language in english
	'localizedLanguageName': '简体中文', // keep this as null unless the localized name of your language is different
	'flagAltText': 'China Flag', // will be displayed if the flag-icon of your language cannot be shown
	'htmlLang': 'zh-Hans', // Keep empty if unsure

	// Add all translation authors here
	'translatedBy': [
		{
			'name': 'diffghjkl', // Add you name or delete the entire {} block
			'url': 'https://blog.dmoe.top/', // Add your website or leave empty
		},
		{
			'name': '宅宅的妙妙屋-一只废阿宅!', // 添加你的名字或删除整个{}块
			'url': 'https://www.justnainai.com/', // 添加你的个人网站或留空
		}
	],
	// ========== Config done =========

	// Images Alt-Names (Shown when images cannot be loaded)
	'images.alt.ukFlag': 'UK Flag',
	'images.alt.deFlag': 'German Flag',
	'images.alt.chFlag': 'China Flag',
	'images.alt.projectIcon': 'Project Icon (Chest with a key)',
	'images.alt.brokenLock': '(Broken Lock)',
	'images.alt.lock': '(Lock)',
	'images.alt.validCss': 'CSS 有效！',

	// Meta-Information
	'title': 'RPG-Maker-MV & MZ Decrypter by Petschko',

	// Header Information
	'header.language': '语言',
	'header.title': 'Petschkos RPG-Maker MV & MZ-File Decrypter',

	// Nav-Tab Items
	'tab.home': '首页',
	'tab.enDecrypt': '加密&解密',
	'tab.restoreImages': '恢复图像 (无密钥)',
	'tab.browserSupport': '浏览器支持',
	'tab.howToUse': '使用方法',
	'tab.credits': '鸣谢',
	'tab.about': '关于',

	// Headings
	'h.fileList': '文件列表',
	'enDecrypt.h.selectFilesAndInfo': '选择文件',
	'enDecrypt.h.headerInfo': 'Header Info',
	'restore.h.selectFiles': '选择文件',
	'browserSupport.h': '浏览器支持',
	'howToUse.h': '如何使用？',
	'credits.h': '鸣谢',
	'credits.h.code': '代码',
	'credits.h.image': '图像',

	// Form Box-Headings
	'enDecrypt.formBox.decryptCode': '解密密钥',
	'enDecrypt.formBox.advanced': '高级',
	'formBox.selectFiles': '选择文件',
	'formBox.fileList': '文件下载',

	// Buttons & UI Elements
	'tooltip.i': 'i', // Tooltip-Element (i) - Info element
	'tooltip.question': '?', // Tooltip-Element (?) - Help element
	'tooltip.details': '详细信息', // Tooltip-Element (details) - Details element
	'files.dragAndDrop': '将文件拖放到此处或选择文件',
	'button.view': '预览',
	'button.save': '保存',
	'button.saveAllAsZip': '全部另存为.zip文件',
	'button.clearFiles': '清空文件列表',
	'button.gotoRestorePage': '点我前往以无密钥转换图像',
	'home.button.restoreImages': '(无密钥) 恢复游戏中的图像',
	'home.button.enDecryptImages': '加密/解密 游戏文件',
	'enDecrypt.label.decryptCodeFile': '请选择一个 {0} 或者 {1}/{2} 文件，然后点击“检测”！', // 0 => "System(.json)", 1 => ".rpgmvp", 2 => ".png_", 3 => Detect-Button-Text
	'enDecrypt.label.decryptCode': '密钥',
	'enDecrypt.label.files': '加密/解密文件',
	'enDecrypt.label.verifyHeader': '是否需要验证 Fake Header？',
	'enDecrypt.label.verifyHeader.yes': '是',
	'enDecrypt.label.verifyHeader.no': '否(忽略)',
	'enDecrypt.label.no': '否',
	'enDecrypt.label.header.length': 'Header Length(长度) {0}', // 0 => In Bytes Text (Italic)
	'enDecrypt.label.header.length.byteNote': '(以 Bytes 为单位)',
	'enDecrypt.label.header.signature': 'Header Signature(签名)',
	'enDecrypt.label.header.version': 'Header Version(版本)',
	'enDecrypt.label.header.remain': 'Header Remain(保留字段)',
	'enDecrypt.button.detect': '检测',
	'enDecrypt.button.headerValues.show': 'Header值 ({0})', // 0 => Show or Hide (Next 2 Lines)
	'enDecrypt.button.headerValues.show.show': '显示',
	'enDecrypt.button.headerValues.show.hide': '隐藏',
	'enDecrypt.button.resetHeaderVal': '将 Header值 重置为默认值',
	'enDecrypt.button.decrypt': '解密',
	'enDecrypt.button.mv.encrypt': '(重新) 加密 MV',
	'enDecrypt.button.mz.encrypt': '(重新) 加密 MZ',
	'restore.label.files': '请选择要恢复的文件',
	'restore.button.restoreOriginalImages': '恢复原始图像',

	// Error/Warning/Info Messages
	'exception.errorCode': '错误代码',
	'exception.emptyFile': '文件为空或无法被浏览器读取...',
	'exception.invalidFakeHeader.1': 'Fake Header 与 Template Fake Header 不匹配。',
	'exception.invalidFakeHeader.2': '请确保您使用的是加密文件！若仍出现错误，请关闭 “Fake Header验证” 并重试。',
	'exception.reportBug': '请报告此错误',
	'exception.helper.invalidByte': '字节值无效 ({0})', // 0 => Byte-Value
	'error': '错误',
	'error.detect.noFile': '请选择一个 {0} 或 {1} 文件！', // 0 => "System(.json)", 1 => ".rpgmvp / .png_"
	'error.detect.invalidJsonFile': '错误：文件内容无效！（可能不是 JSON 或 加密图像 文件） - 仅支持 {0} 格式的文件！', // 0 => ".json/.rpgmvp/.png_"
	'error.detect.keyNotFound.1': '错误：未找到密钥——请确保选择了正确的文件！',
	'error.detect.keyNotFound.2': '您还可以使用加密图像（{0}）来检测密钥！', // 0 => ".rpgmvp / .png_"
	'error.detect.keyNotFound.3': '在极少数情况下，密钥在游戏中被隐藏/混淆。请尝试以下步骤：',
	'error.detect.keyNotFound.3.1': '1.打开下方链接并复制代码',
	'error.detect.keyNotFound.3.2': '2.将代码粘贴至此文件的最后一行：{0}', // 0 => "./www/js/rpg_core(.js)"
	'error.detect.keyNotFound.3.3': '3.保存文件',
	'error.detect.keyNotFound.3.4': '4.运行游戏并复制代码',
	'error.restore.noFileSelected': '请至少选择一个要恢复的文件...',
	'error.enDecrypt.noCode': '请输入密钥！',
	'error.enDecrypt.invalidCode': '密钥只能包含十六进制字符！(如：{0})', // 0 => "0-9 & A-F & a-f"
	'error.enDecrypt.noFileSelected': '请至少选择一个要解密/加密的文件...',
	'error.zip.emptyZip': '无法提供 ZIP 下载！ZIP 文件为空...',
	'info.detect.keyFound': '检测密钥成功^^! ({0})', // 0 => Encryption key
	'warn.enDecrypt.header.invalidLength': '信息: Header Length 必须是正整数！(现在使用默认值: {0})', // 0 => Default Header Length value
	'warn.enDecrypt.header.invalidSignature': '信息: Header Signature 只能包含十六进制字符！(如：{0})，(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Signature
	'warn.enDecrypt.header.invalidVersion': '信息: Header Version 只能包含十六进制字符！(如：{0})，(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Version
	'warn.enDecrypt.header.invalidRemain': '信息: Header Remain 只能包含十六进制字符！(如：{0})，(现在使用默认值：{1})', // 0 => "0-9 & A-F & a-f", 1 => Default Header Remain
	'confirm.resetHeaderValues': '您确定要将 Header值 重置为默认值吗？',

	// == Content: Hidden-Info ==
	'info.information.1': '信息',
	'info.information.2': '我的项目 “{1}” {0} , 它可以处理整个目录并自行保存/重命名文件...', // 0 => "released an Alpha-Version"-Releases-Link, 1 => "Java-RPG-Maker-MV-Decrypter"-Project-Link
	'info.information.2.releaseLink': '发布了一个 Alpha版本',
	'info.information.2.projectLink': 'Java-RPG-Maker-MV-Decrypter',
	'info.information.3': '它拥有 GUI ，您可以去尝试一下。如果您只想解密文件，我推荐您使用这个版本 {0} 。但对于整个目录，您应该尝试 Java 版本！ =)', // 0 => No download argument
	'info.information.3.noDownload': '(因此您不需要下载)',

	// == Content: Home ==
	'home.content.welcome.1': '(译者diffghjkl注：本站的中文文本进行了简单的修正与优化，与官方提供的文本有所不同) 欢迎使用 RPG-Maker MV & MZ-File Decrypter ，您可以轻松地解密任何 RPG-MV/RPG-MZ 项目中使用内置加密算法加密的文件。同时，您也可以重新加密它们（主要用于翻译游戏内容）',
	'home.content.welcome.2': '请勿使用本工具来窃取内容！如果您需要查看图像（大多数法律是允许私人使用的），请随意查看，但不要窃取它们！',
	'home.content.whatToDoSelection': '请选择您要执行的操作',

	// == Content: En- & Decrypt ==
	'enDecrypt.content.1': '对于加密的图像文件（一般为 {0} 格式）转换为 .png 格式，是不需要密钥的。{1}您需要重新加密它们。', // 0 => ".rpgmvp & .png_", 1 => "except" (bold txt)
	'enDecrypt.content.2': '在这里， 您可以解密&(重新)加密 RPG-Maker MV & MZ 游戏文件',
	'enDecrypt.content.3': '您可以从以下文件中获取密钥',
	'enDecrypt.content.3.mv': 'RPG-Maker MV',
	'enDecrypt.content.3.mz': 'RPG-Maker MZ',
	'enDecrypt.content.3.text': '游戏根目录{0} 或任何加密的图像（如 {1} 文件）', // 0 => path to system.json, 1 => File-extension
	'enDecrypt.content.4': '选择文件后请点击“检测”。如果您知道密钥，可直接在下方的输入框中输入！', // 0 => Detect-Button-Text, 1 => "System(.json)"
	'enDecrypt.content.header.info': '何时需要更改这些设置？',
	'enDecrypt.content.header.decryption': '解密',
	'enDecrypt.content.header.encryption': '加密',

	// == Content: Restore ==
	'restoreImages.content': '在这里，您可以直接将 RPG-Maker 游戏中的图像文件（一般为 {1} 格式）转换为 {0} 格式，无需密钥', // 0 => "PNG", 1 => ".rpgmvp & .png_"

	// == Content: Browser Support ==
	'browserSupport.note': '请注意，此脚本仅在 {0} 上测试和开发。您可以通过 {1} 帮助我使其在所有浏览器上运行！', // 0 => "Firefox", 1 => Report bugs-Link
	'browserSupport.note.reportBugsLink': '报告错误',
	'browserSupport.note.first': '首先',
	'browserSupport.unknown': '未知',
	'browserSupport.unusable': '无法使用',
	'browserSupport.partialUsable': '部分可用',
	'browserSupport.almostCompleteUsable': '几乎完全可用',
	'browserSupport.usable': '可用',
	'browserSupport.outOfSupport': '不支持',
	'browserSupport.feature.downloadFiles': '下载文件',
	'browserSupport.feature.viewFiles': '查看文件',
	'browserSupport.feature.enDecrypt': '加密/解密',
	'browserSupport.feature.zipDownload': '下载.zip文件',
	'browserSupport.browser.ie': 'Internet Explorer',
	'browserSupport.browser.edge': 'Edge',
	'browserSupport.browser.chrome': 'Google Chrome',
	'browserSupport.browser.firefox': 'Firefox',
	'browserSupport.browser.safari': 'Safari',
	'browserSupport.browser.opera': 'Opera',

	// == Content: How to use ==
	'howToUse.content.or': '或',
	'howToUse.content.new': '新增',
	'howToUse.content.except': '除非',
	'howToUse.content.1.1': '支持的加密文件的后缀有 {0} ,否则将无法使用此工具', // 0 => All-Valid Files extensions
	'howToUse.content.1.2': '如果您需要加密文件，它们通常有一个文件扩展名，如 "{0}" =)', // 0 => ".png"
	'howToUse.content.2.1': '获取加密/解密密钥',
	'howToUse.content.2.2': '{0}文件（如 {1} 图像文件）无需密钥, {2}您需要重新加密文件。', // 0 => "PNG", 1 => ".rpgmvp & .png_", 2 => "except"
	'howToUse.content.2.ul.1': '上传游戏的 {0} 文件后，点击“{1}”运行检测代码', // 0 => "System(.json)", 1 => Detect-Button-Text
	'howToUse.content.2.ul.2': '如果检测不起作用，则会弹出进一步的说明',
	'howToUse.content.3.1': '选择要解密/加密的文件',
	'howToUse.content.3.2': '可同时选择多个文件！',
	'howToUse.content.4': '点击解密或加密按钮',
	'howToUse.content.5.1': '如果您点击文件名旁边的“{0}”，则可以预览解密的文件。', // 0 => View Button Name
	'howToUse.content.5.2': '加密的文件除外',
	'howToUse.content.6': '您现在可以通过点击“{0}”来保存它们。 =)', // 0 => Save Button Name
	'howToUse.content.6.ul.1': '您还可以通过单击“{0}”将文件列表中的所有文件打包为.zip格式！', // 0 => Save all as Zip Button-Name

	// == Content: Credits ==
	'credits.anonymous': '匿名',
	'credits.anonymous.explanation': '该用户希望保持匿名，但这是属于他的',
	'credits.forProject': '创建此项目',
	'credits.forLib': '{0} 库', // 0 => Lib-Name
	'credits.betterInterface': '更友好的用户界面',
	'credits.noKey': '对于 {0} 的无密钥“解密”的提示', // 0 => "PNGs"
	'credits.chrome.viewFile': '帮助解决在 Google Chrome 浏览器的 "预览文件" Bug',
	'credits.icon': '图标',
	'credits.icons': '图标',
	'credits.lock': '锁定',
	'credits.unknownAuthor': '我无法得知它的出处，如果您知道的话，请给我 {0} ', // 0 => E-Mail-Link
	'credits.emailLink': '发送电子邮件',

	// == Content: Tooltips ==
	'tooltip.content.infoZipDownload': '文件大小限制将取决于您的内存和浏览器...若要处理多个文件（{0}），推荐您使用 Java-RPG-Maker-MV-Decrypter ！', // 0 => "500+mb"
	'tooltip.content.infoClearFiles': '删除列表中的所有文件',
	'tooltip.content.viewEncryptedFileInfo': '该文件已加密，您无法在浏览器中查看它。您可以保存它并将其放入游戏中。（例如翻译的图像）',
	'tooltip.content.gameDir': '游戏目录',
	'tooltip.content.summary': '概括',
	'enDecrypt.tooltip.content.headerInfo': '专家设置！通常您不需要在这里更改任何内容！（仅在极少数情况下）',
	'enDecrypt.tooltip.content.verifyHeader.help.1': '检查文件头是否正确',
	'enDecrypt.tooltip.content.verifyHeader.help.2': '文件头仅在加密时重要。（解密时可忽略）',
	'enDecrypt.tooltip.content.verifyHeader.help.3': '在 {0} 情况下，某些游戏会使用不同的标头设置。您可以在以下位置找到正确的标头设置：', // 0 => "very rare" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.help.3.rare': '极少数',
	'enDecrypt.tooltip.content.verifyHeader.help.4': '搜索 “{0}”, 您可以找到所有值', // 0 => "function Decrypter()"
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1': '忽略文件头',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.1.warning': '警告',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.2': '这可能会导致解密的文件无效！（若文件未加密，也会解密）',
	'enDecrypt.tooltip.content.verifyHeader.yesNo.help.3': '若您确定您的文件已被 RPG-Maker 加密，则只需选择“{0}”！', // 0 => No-Button Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.1': '一般情况下您不需要对标头进行解密',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.2': '您可以忽略它',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.3': '它只是用来确保您的文件是一个 RPG-Maker 加密的文件 ^^',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary': '您可以在 {0} 解密任何 RPG 文件', // 0 => "CAN" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.can': '不了解如何正确设置的情况下',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.2': '如果无法验证 Header，请将其设置为“否” =)',
	'enDecrypt.tooltip.content.verifyHeader.decryption.info.summary.3': '通常情况下它适用默认设置',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.1': '如果您想将文件转回游戏，则需要验证Header，游戏会检查文件头是否正确。',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.2': '若文件头错误，游戏将无法正确显示',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3': '您 {0} 确保文件头正确，若文件头错误，游戏将无法正确显示', // 0 => "NEED" - Bold-Text
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.3.need': '需要',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.4': '理论上默认设置适用于绝大多数游戏', // 0 => "99", 1 => "100"
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.5': '因此，请先尝试默认设置，若无法工作，则需搜索正确的 Header设置。',
	'enDecrypt.tooltip.content.verifyHeader.encryption.info.6': '您可以在这里找到它们：',

	// Titles (Mouseover hints)
	'title.projectIcon': '解锁或重新锁定 RPG Maker MV 文件',
	'title.dragAndDrop': '将文件拖放到此处或选择文件',
	'title.viewInBrowser': '在浏览器上预览文件',
	'title.save': '将文件保存到您的设备上',
	'languages.title.selectDifferentLang': '选择其他语言',
	'info.title.seeReleases': '查看 GitLab 上的 alpha 版本',
	'info.title.seeProject': '访问 GitLab 上的项目',
	'browserSupport.title.reportBugs': '通过报告错误来帮助我',

	// Footer
	'footer.createdBy': '脚本由 {0} 创建', // 0 => "Petschko"-Link
	'footer.creator.title': '如果您有任何问题或疑问，请给我发电子邮件',
	'footer.visitRepo': 'GitLab',
	'footer.visitRepo.title': '在 GitLab 上访问此项目',
	'footer.reportBugs': '报告错误',
	'footer.reportBugs.title': '如果发现错误，请报告 =) (也可以向我发送电子邮件)',
	'footer.translatedBy': '中文译者为 {0} ', // 0 => Translator name(s) and link(s) if given
	'footer.translatedByLinkTitle': '访问译者的网站',
	'footer.translateHelp': '在此提交翻译或修正拼写错误',

} // Ignore this line
