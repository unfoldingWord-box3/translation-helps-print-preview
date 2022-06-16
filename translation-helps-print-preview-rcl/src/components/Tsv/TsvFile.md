# TsvFile

```js
function Component () {
  const [file, setFile] = React.useState();

  React.useEffect(() => {
    fetch('https://git.door43.org/test_org2/ml_tn/raw/branch/master/tn_3JN.tsv')
    .then(response => response.text())
    .then(_file => setFile(_file));
  }, []);
  
  return (<TsvFile file={file} />);
};

<Component />
```