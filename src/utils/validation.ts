import * as yup from 'yup';
//https://github.com/jquense/yup/issues/72
let sampleSchema = yup.object().shape({
  firstName: yup.string().required(),
  // SelectTest: yup.array().required(),
  checkbox1: yup.boolean().required(),
  checkbox2: yup.boolean().required(),
  checkbox3: yup.boolean().required(),
});
sampleSchema = sampleSchema.test(
  // this test is added additional to any other (build-in) tests
  'customCheckboxTest',
  '', // we'll return error message ourself if needed
  (obj: any) => {
    // only testing the checkboxes here
    // if (obj.checkbox1 || obj.checkbox2) {
    //   return true; // everything is fine
    // }

    const checkBoxList = [obj.checkbox1, obj.checkbox2, obj.checkbox3];
    const checked = checkBoxList.filter(function(checkEl) {
      return checkEl;
    });
    if (checked.length > 1) return true;

    return new yup.ValidationError(
      'Check at least 2 checkbox',
      null,
      'checkBoxGroup', //put checkBoxGroupCmp's groupName
    );
  },
);

export { sampleSchema };
