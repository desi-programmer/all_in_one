## Adding Nativation

[React Router](https://reactnavigation.org/docs/getting-started/)

Current Steps 

1. npm install @react-navigation/native

2. react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the following code to the body of MainActivity class:

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
and make sure to add an import statement at the top of this file:

import android.os.Bundle;


3. npm install react-native-screens react-native-safe-area-context