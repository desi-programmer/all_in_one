// using markdown Widget
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdown_widget/markdown_widget.dart';
import 'package:markdown_widget/config/highlight_themes.dart' as theme;

class MarkdownWidgetCode extends StatefulWidget {
  const MarkdownWidgetCode({Key? key}) : super(key: key);

  @override
  _MarkdownWidgetCodeState createState() => _MarkdownWidgetCodeState();
}

class _MarkdownWidgetCodeState extends State<MarkdownWidgetCode> {
  String data = """
  
  ### What will be the output of the code ?

  ```python
  import random
  print(random.randint(0,9))

  def newFunc():
    print('Welcome')
    newdata[x] = 12
    mylist.append(12)
  ```
  """;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Markdown Widget Code",
        ),
      ),
      body: MarkdownWidget(
        padding: const EdgeInsets.all(
          12.0,
        ),
        data: data,
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
