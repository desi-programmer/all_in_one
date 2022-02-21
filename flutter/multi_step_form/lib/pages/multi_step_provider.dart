import 'package:flutter/material.dart';
import 'package:form_field_validator/form_field_validator.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:im_stepper/stepper.dart';
import 'package:multi_step_form/modal/user_modal.dart';
import 'package:provider/provider.dart';

class MultiStepProvider extends StatefulWidget {
  const MultiStepProvider({Key? key}) : super(key: key);

  @override
  _MultiStepProviderState createState() => _MultiStepProviderState();
}

class _MultiStepProviderState extends State<MultiStepProvider> {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<UserModal>(
      create: (context) => UserModal(),
      child: Scaffold(
        appBar: AppBar(
          title: const Text(
            "Using Provider",
          ),
        ),
        //
        body: Consumer<UserModal>(
          builder: (context, value, child) {
            switch (value.activeIndex) {
              case 0:
                return const BasicDetails();
              case 1:
                return const EducationDetails();
              default:
                return const BasicDetails();
            }
          },
        ),
      ),
    );
  }
}

class BasicDetails extends StatefulWidget {
  const BasicDetails({Key? key}) : super(key: key);

  @override
  _BasicDetailsState createState() => _BasicDetailsState();
}

class _BasicDetailsState extends State<BasicDetails> {
  GlobalKey<FormState> basicFormKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Consumer<UserModal>(
      builder: (context, modal, child) => Form(
        key: basicFormKey,
        child: ListView(
          padding: const EdgeInsets.all(
            12.0,
          ),
          children: [
            Center(
              child: DotStepper(
                activeStep: modal.activeIndex,
                dotCount: modal.totalIndex,
                dotRadius: 24.0,
                shape: Shape.pipe,
                spacing: 10.0,
              ),
            ),
            Text(
              "Step ${modal.activeIndex + 1} of ${modal.totalIndex}",
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

                    modal.changeStep(1);
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
      ),
    );
  }
}

class EducationDetails extends StatefulWidget {
  const EducationDetails({Key? key}) : super(key: key);

  @override
  EducationDetailsState createState() => EducationDetailsState();
}

class EducationDetailsState extends State<EducationDetails> {
  @override
  Widget build(BuildContext context) {
    return Consumer<UserModal>(
      builder: (context, modal, child) {
        return ListView(
          padding: const EdgeInsets.all(
            12.0,
          ),
          children: [
            Center(
              child: DotStepper(
                activeStep: modal.activeIndex,
                dotCount: modal.totalIndex,
                dotRadius: 24.0,
                shape: Shape.pipe,
                spacing: 10.0,
              ),
            ),
            Text(
              "Step ${modal.activeIndex + 1} of ${modal.totalIndex}",
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
      },
    );
  }
}
