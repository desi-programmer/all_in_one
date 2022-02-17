import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:markdowntest/flutter_markdown_output.dart';
import 'package:markdowntest/markdown_widget_rendered.dart';

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
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Where to go ?",
          style: GoogleFonts.manrope().copyWith(
            fontWeight: FontWeight.bold,
          ),
        ),
        centerTitle: true,
      ),
      //
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const FlutterMarkdownOutput(),
                  ),
                );
              },
              child: const Text(
                "Flutter Markdown Rendered",
              ),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(
                  MaterialPageRoute(
                    builder: (context) => const MarkdownWidgetContent(),
                  ),
                );
              },
              child: const Text(
                "Markdown Widget Rendered",
              ),
            ),
          ],
        ),
      ),
    );
  }
}
