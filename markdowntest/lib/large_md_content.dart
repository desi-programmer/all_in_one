import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdown_widget/markdown_widget.dart';
import 'package:markdown_widget/config/highlight_themes.dart' as theme;

// copied from stackedit
String largeMdContent = """

# Welcome to StackEdit!
Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.

  
You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

### List

 - One
 - Two 
 - Three

### Numbered List 

 1. Index 0
 2. Index 1
 3. Index 3


### Image
![Image](https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png)

```python

print('Welcome')
if x:
  print(x)

```


""";

class LargeMdWidget extends StatelessWidget {
  const LargeMdWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: MarkdownWidget(
        data: largeMdContent,
        styleConfig: StyleConfig(
          titleConfig: TitleConfig(
            commonStyle: const TextStyle(
              fontSize: 20.0,
            ),
          ),
          codeConfig: CodeConfig(
            codeStyle: const TextStyle(
              fontSize: 40.0,
            ),
          ),
          preConfig: PreConfig(
            language: 'py',
            theme: theme.atomOneLightTheme,
            textStyle: GoogleFonts.sourceCodePro(
              fontSize: 18.0,
            ),
          ),
        ),
      ),
    );
  }
}
