# Frontend CLI file generator

Generates required files for a class for use in an Angular or React.

## Usage

To run the app
```$ fe-file-gen {className} -t {componentType}```

Replace {className} with the name of the file you want to create, using dashes between words e.g my-home-page.

Replace {componentType} with the angular type the component will be e.g:
- component
- service
- react

Component and service are angular components.

## Output format

### Angular Component

Outputs the required files for the relevent class type in a folder with the given className.

E.g
```$ fe-file-gen my-home-page -t component```

Will create a new folder my-home-page, which contains 5 files
- my-home-page.component.scss
- my-home-page.component.spec.ts
- my-home-page.component.template.pug
- my-home-page.component.ts
- my-home-page.module.ts

These will be fully populated with the basics they'll need.

### React component

The react component base has dependencies on the following elements:
- react
- redux
- react-redux

```fe-file-gen my-react-thing -t react```

Creates the following files:
- my-react-thing.component.scss
- my-react-thing.dispatch.props.ts
- my-react-thing.presentation.tsx
- my-react-thing.scss
- my-react-thing.state.props.ts


