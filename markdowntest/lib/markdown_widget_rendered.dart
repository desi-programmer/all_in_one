import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdown_widget/markdown_widget.dart';
import 'package:markdown_widget/config/highlight_themes.dart' as theme;

class MarkdownWidgetContent extends StatelessWidget {
  const MarkdownWidgetContent({Key? key}) : super(key: key);
// copied from stackedit
  final String largeMdContent = """
# Parsing using Markdown Widget

- Neat way to enter markdown.
- Can style all tags.
- Easy to add syntax highlight.
- Checkboxes are not rendered

# Cloud Firestore
![Firestore Image](https://w3tpoint.com/uploads/4aea8d0b521f93686cc33940342f19ac.png)

Google's cloud serverless database.

> NOTE : Priced at docs read.


## Root-level collections

Create collections at the root level of your database to organize disparate data sets.

## Subcollections

You can create collections within documents when you have data that might expand over time.

## Adding data

```js
const data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA'
};

// Add a new document in collection "cities" with ID 'LA'
const res = await db.collection('cities').doc('LA').set(data);
```

## Types of Data

```js
const data = {
  stringExample: 'Hello, World!',
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
  arrayExample: [5, true, 'hello'],
  nullExample: null,
  stringExample: 'Hello, World!',
  booleanExample: true,
  numberExample: 3.14159265,
  dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
  arrayExample: [5, true, 'hello'],
  nullExample: null,
  objectExample: {
    a: 5,
    b: true
  }
};

const res = await db.collection('data').doc('one').set(data);
```

## Deleting data

```js
const res = await db.collection('cities').doc('DC').delete();
```

- [ ] Some task
- [X] Some Completed Task

""";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Markdown",
        ),
      ),
      body: MarkdownWidget(
        padding: const EdgeInsets.all(
          12.0,
        ),
        data: largeMdContent,
        styleConfig: StyleConfig(
          titleConfig: TitleConfig(
            h1: GoogleFonts.manrope().copyWith(
              color: Colors.purple,
              fontWeight: FontWeight.bold,
            ),
          ),
          preConfig: PreConfig(
            language: 'py',
            theme: theme.atomOneLightTheme,
            textStyle: GoogleFonts.sourceCodePro(
              fontSize: 15.0,
            ),
          ),
        ),
      ),
    );
  }
}
