const tasks = [
  'https://api.github.com/users/mojombo',
  'https://api.github.com/users/defunkt',
  'https://api.github.com/users/pjhyett'
];

const readFiles = (files) => {
  let promise = Promise.resolve();

  files.forEach(file =>
    promise = promise.then(() => fetch(file)
      .then(res => res.json())
      .then(data => console.log(data))
    ));
  return promise;
};

readFiles(tasks);
