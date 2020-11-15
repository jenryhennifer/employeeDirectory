# Employee Directory

## Deployment

[Deployment](https://jenryhennifer.github.io/employeeDirectory/)

## Tech Used

* React
* JavaScript
* HTML
* CSS
* GitHub
* Bootstrap

## Description

The purpose of this project was to create an employee directory. I decided to use Futurama for sample employees. This app allows you to filter employee information through name, position, status, and species (specifically for the Futurama theme). The App.js imports the informatino from the jumbotron, table, and emmployees files. The EmployeeList is the prop for the tables to reference the data from the JSON file containing all employee information. 

```
  return (
    <div className="App">
      <Jumbotron />
      <Table employees = { EmployeeList } />
    </div>
  );
```

The data is sorted inside of a table that is produced using the array prototype .map(). The sorting was created using a new variable. Search and sort both used the hooks 'useState' to establish the state of the data. 

```
  const [sorted, setSorted] = React.useState(null);

  const [search, setSearch] = React.useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
```
When the data is sorted it uses a sort function to establish how the data is sorted. If there is no sort established, the data will be sorted in order by id.

```
  const sortedEmployees = sorted
    ? searchEmployee.concat().sort((a, b) => {
        const aval = a[sorted];
        const bval = b[sorted];
        if (aval < bval) {
          return -1;
        } else if (bval < aval) {
          return 1;
        } else {
          return 0;
        }
      })
    : searchEmployee;
```






This was a first attempt using hooks with React. It was difficult, but successful.

## License

MIT License

Copyright (c) 2020 Jennifer Henry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<hr />
<hr />

# Author

Jennifer Henry

* [LinkedIn](https://www.linkedin.com/in/jennifer-henry-4a540a149/)
* [GitHub](https://github.com/jenryhennifer)
* jenhenry1995@gmail.com