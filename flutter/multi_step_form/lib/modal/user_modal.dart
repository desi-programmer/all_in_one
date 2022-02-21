import 'package:flutter/foundation.dart';

class UserModal extends ChangeNotifier {
  String? name;
  String? email;
  String? password;
  String? education;

  int activeIndex = 0;
  int totalIndex = 2;

  changeStep(int index) {
    print(index);
    activeIndex = index;
    notifyListeners();
  }
}
