import * as blessed from 'blessed';

interface FormData {
  date: string;
  blockers: string;
  updates: string;
  next: string;
  save: boolean;
}

let screen: blessed.Widgets.Screen = null;

screen = blessed.screen({
  smartCSR: true,
  autoPadding: true,
  title: 'Weekly status report',
});

const form = blessed.form({
  parent: screen,
  width: '90%',
  left: 'center',
  keys: true,
  vi: true,
});

const titleLabel = blessed.text({
  parent: screen,
  top: 0,
  left: 'center',
  content: '-== Weekly status report ==-',
});

const dateLabel = blessed.text({
  parent: screen,
  top: 2,
  left: 1,
  content: 'Date:',
});

const date = blessed
  .textbox({
    parent: form,
    name: 'date',
    top: 3,
    left: 1,
    width: '40%',
    height: 3,
    inputOnFocus: true,
    border: {
      type: 'line',
    },
  })
  .setValue(new Date().toISOString().split('T')[0]);

const blockersLabel = blessed.text({
  parent: screen,
  top: 6,
  left: 1,
  content: 'Blockers:',
});

const blockersText = blessed
  .textbox({
    parent: form,
    name: 'blockers',
    top: 7,
    left: 1,
    width: '40%',
    height: 3,
    inputOnFocus: true,
    border: {
      type: 'line',
    },
  })
  .setValue('None');

const updatesLabel = blessed.text({
  parent: screen,
  content: 'Updates:',
  top: 10,
  left: 1,
});

const updatesTextarea = blessed.textarea({
  parent: form,
  name: 'updates',
  top: 11,
  left: 1,
  height: 4,
  inputOnFocus: true,
  border: {
    type: 'line',
  },
});

const nextLabel = blessed.text({
  parent: screen,
  content: 'Next:',
  top: 15,
  left: 1,
});

const nextTextarea = blessed.textarea({
  parent: form,
  name: 'next',
  top: 16,
  left: 1,
  height: 4,
  inputOnFocus: true,
  border: {
    type: 'line',
  },
});

const save = blessed.button({
  parent: form,
  name: 'save',
  content: 'Save',
  top: 22,
  left: 'center',
  shrink: true,
  padding: {
    top: 1,
    right: 3,
    bottom: 1,
    left: 3,
  },
  style: {
    bold: true,
    fg: 'white',
    bg: 'red',
    focus: {
      inverse: true,
    },
  },
});

save.on('press', () => {
  form.submit();
});

form.on('submit', (data: FormData) => {
  form.reset();
  // console.log(data.date);
  // console.log(data.blockers);
  // send formData via post with axios...
});

screen.key('q', () => screen.destroy());
screen.render();
