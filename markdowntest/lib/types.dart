import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdown_widget/markdown_widget.dart';
import 'package:markdown_widget/config/highlight_themes.dart' as theme;

class TestingAllTypes extends StatelessWidget {
  const TestingAllTypes({Key? key}) : super(key: key);

  final String data = """
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


## Bullet Points 

- Type some Markdown 
- ✨Magic ✨
- asdas

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

## Done or not

- [ ] Some task
- [X] Some Completed TasK


## Link

[Visit](https://www.desiprogrammer.com/)
> but you need to implement custom tap events

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

> Can't show SVG images

## Some Python Code

```python
import random
print(random.randint(0,9))

def newFunc():
  print('Welcome')
  newdata[x] = 12
  mylist.append(12)
```
  
## Table

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


""";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Markdown Content test",
        ),
      ),
      //
      body: MarkdownWidget(
        shrinkWrap: true,
        physics: const AlwaysScrollableScrollPhysics(),
        padding: const EdgeInsets.all(
          12.0,
        ),
        data: data,
        loadingWidget: const CircularProgressIndicator(),
        styleConfig: StyleConfig(
          codeConfig: CodeConfig(
            codeStyle: const TextStyle(
              fontSize: 16.0,
            ),
          ),
          pConfig: PConfig(
              linkStyle: const TextStyle(
                fontSize: 20.0,
                // decoration: TextDecoration.underline,
                color: Colors.blue,
              ),
              onLinkTap: (url) {
                // _launchUrl(url);
              }),
          preConfig: PreConfig(
            language: 'py',
            theme: theme.githubTheme,
            textStyle: GoogleFonts.sourceCodePro(
              fontSize: 14.0,
            ),
          ),
        ),
      ),
    );
  }
}
