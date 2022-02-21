import 'package:flutter/material.dart';
import 'package:form_field_validator/form_field_validator.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:im_stepper/stepper.dart';

class MultiPageBasic extends StatefulWidget {
  const MultiPageBasic({Key? key}) : super(key: key);

  @override
  _MultiPageBasicState createState() => _MultiPageBasicState();
}

class _MultiPageBasicState extends State<MultiPageBasic> {
  // form Keys

  GlobalKey<FormState> basicFormKey = GlobalKey<FormState>();

  int activeIndex = 0;
  int totalIndex = 2;

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        if (activeIndex != 0) {
          activeIndex--;
          setState(() {});
          return false;
        }
        return true;
      },
      child: Scaffold(
        appBar: AppBar(
          title: const Text(
            "Basic Multi Step",
          ),
        ),
        //
        body: bodyBuilder(),
      ),
    );
  }

  Widget bodyBuilder() {
    switch (activeIndex) {
      case 0:
        return basicDetails();
      case 1:
        return educationDetails();
      default:
        return basicDetails();
    }
  }

  Widget basicDetails() {
    return Form(
      key: basicFormKey,
      child: ListView(
        padding: const EdgeInsets.all(
          12.0,
        ),
        children: [
          Center(
            child: DotStepper(
              activeStep: activeIndex,
              dotCount: totalIndex,
              dotRadius: 24.0,
              shape: Shape.pipe,
              spacing: 10.0,
            ),
          ),
          Text(
            "Step ${activeIndex + 1} of $totalIndex",
            style: const TextStyle(
              fontSize: 20.0,
            ),
            textAlign: TextAlign.center,
          ),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Name",
            ),
            validator: RequiredValidator(
              errorText: "Required *",
            ),
          ),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Email",
            ),
            validator: MultiValidator(
              [
                RequiredValidator(
                  errorText: "Required *",
                ),
                EmailValidator(
                  errorText: "Enter a valid Email",
                ),
              ],
            ),
          ),
          TextFormField(
            decoration: const InputDecoration(
              labelText: "Password",
            ),
            validator: MinLengthValidator(
              6,
              errorText: "Enter atleast 6 characters",
            ),
          ),
          const SizedBox(
            height: 12.0,
          ),
          SizedBox(
            height: 45.0,
            child: ElevatedButton(
              onPressed: () {
                if (basicFormKey.currentState?.validate() ?? false) {
                  // next
                  setState(() {
                    activeIndex++;
                  });
                }
              },
              child: Text(
                "Next",
                style: GoogleFonts.rubik().copyWith(
                  fontSize: 20.0,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget educationDetails() {
    return ListView(
      padding: const EdgeInsets.all(
        12.0,
      ),
      children: [
        Center(
          child: DotStepper(
            activeStep: activeIndex,
            dotCount: totalIndex,
            dotRadius: 24.0,
            shape: Shape.pipe,
            spacing: 10.0,
          ),
        ),
        Text(
          "Step ${activeIndex + 1} of $totalIndex",
          style: const TextStyle(
            fontSize: 20.0,
          ),
          textAlign: TextAlign.center,
        ),
        TextFormField(
          decoration: const InputDecoration(
            labelText: "Education",
          ),
          validator: RequiredValidator(
            errorText: "Required *",
          ),
        ),
        const SizedBox(
          height: 12.0,
        ),
        SizedBox(
          height: 45.0,
          child: ElevatedButton(
            onPressed: () {},
            child: Text(
              "Register",
              style: GoogleFonts.rubik().copyWith(
                fontSize: 20.0,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
