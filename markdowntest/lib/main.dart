import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdowntest/mdwidget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Markdown Demo',
      theme: ThemeData(
        fontFamily: GoogleFonts.lato().fontFamily,
        primarySwatch: Colors.purple,
      ),
      home: const MarkdownWidgetCode(),
    );
  }
}
