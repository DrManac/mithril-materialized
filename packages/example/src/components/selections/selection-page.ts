import { Select, CodeBlock, Options, Switch, RadioButtons, Dropdown } from 'mithril-materialized';
import m from 'mithril';

export const SelectionPage = () => {
  const onchange = (v: unknown) => alert(`Input changed. New value: ${v}`);
  return {
    view: () =>
      m('.col.s12.m8.xl7', [
        m('h2.header', 'Selections'),

        m('h3.header', 'Select'),
        m(
          'row',
          m(Select, {
            label: 'What is your favorite hobby?',
            isMandatory: true,
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange,
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(Select, {
            label: 'What is your favorite hobby?',
            isMandatory: true,
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange,
          })`,
        }),

        m('h3.header', 'Select multiple'),
        m(
          'row',
          m(Select, {
            multiple: true,
            placeholder: 'Make a choice...',
            label: 'What are your favorite hobbies?',
            checkedId: ['out', 'read'],
            options: [
              { id: 'movies', label: 'Watching movies' },
              { id: 'out', label: 'Going out' },
              { id: 'read', label: 'Reading' },
            ],
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(Select, {
            multiple: true,
            placeholder: 'Make a choice...',
            label: 'What are your favorite hobbies?',
            checkedId: ['out', 'read'],
            options: [
              { id: 'movies', label: 'Watching movies' },
              { id: 'out', label: 'Going out' },
              { id: 'read', label: 'Reading' },
            ],
          })`,
        }),

        m('h3.header', 'Options'),
        m(
          'row',
          m(Options, {
            label: 'What is your favorite hobby?',
            isMandatory: true,
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange: (v: boolean, id: string) => onchange(`Option ${id} is changed to ${v}.`),
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(Options, {
            label: 'What is your favorite hobby?',
            isMandatory: true,
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange: (v: boolean, id: string) => onchange(\`Option \${id} is changed to \${v}.\`),
          })`,
        }),

        m('h3.header', 'RadioButtons'),
        m(
          'row',
          m(RadioButtons, {
            label: 'What is your favorite hobby?',
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange,
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(RadioButtons, {
            label: 'What is your favorite hobby?',
            options: [{ id: 'movies', label: 'Watching movies' }, { id: 'out', label: 'Going out' }],
            onchange,
          })`,
        }),

        m('h3.header', 'Switch'),
        m(
          '.row',
          m(Switch, {
            label: 'What is your gender?',
            left: 'Man',
            right: 'Woman',
            onchange,
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(Switch, {
            label: 'What is your gender?',
            left: 'Man',
            right: 'Woman',
            onchange,
          })`,
        }),

        m('h3.header', 'Dropdown'),
        m(
          '.row',
          m(Dropdown, {
            id: 'hobby',
            label: 'Pick a hobby',
            // selected: 'movies',
            items: [
              { name: 'Movies', value: 'movies' },
              { name: 'Reading', value: 'reading' },
              { name: 'Eating', value: 'eating' },
            ],
            onchange,
          })
        ),
        m(CodeBlock, {
          newRow: true,
          code: `          m(Dropdown, {
            id: 'hobby',
            label: 'Pick a hobby',
            // selected: 'movies',
            items: [
              { name: 'Movies', value: 'movies' },
              { name: 'Reading', value: 'reading' },
              { name: 'Eating', value: 'eating' },
            ],
            onchange,
          })`,
        }),
      ]),
  };
};
