import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:google_fonts/google_fonts.dart';

class FlutterMarkdownOutput extends StatefulWidget {
  const FlutterMarkdownOutput({Key? key}) : super(key: key);

  @override
  _FlutterMarkdownOutputState createState() => _FlutterMarkdownOutputState();
}

class _FlutterMarkdownOutputState extends State<FlutterMarkdownOutput> {
  String largeMdContent = """
# Parsing using Flutter Markdown

- Neat way to enter markdown.
- Can style all tags.
- Issue in adding syntax highlight.
- Checkboxes are rendered

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
        title: Text(
          "Flutter Markdown Rendered Content",
          style: GoogleFonts.manrope().copyWith(
            fontWeight: FontWeight.bold,
            fontSize: 15.0,
          ),
        ),
      ),
      //
      body: ListView(
        padding: const EdgeInsets.all(
          12.0,
        ),
        children: [
          MarkdownBody(
            data: largeMdContent,
            styleSheet: MarkdownStyleSheet(
              h1: GoogleFonts.manrope().copyWith(
                color: Colors.purple,
                fontWeight: FontWeight.bold,
              ),
              code: GoogleFonts.sourceCodePro(),
            ),
          ),
        ],
      ),
    );
  }
}
