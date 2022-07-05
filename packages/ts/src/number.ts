type ICategory = {
  [key: string]: string | undefined;
};

const category = {
  namespace: 'app',
  jsbName: 'view',
  jsbCode: '1',
};

function log(category: ICategory) {
  console.log(category);
}

function log1(params: {
  namespace: string;
  jsbName: string;
  jsbCode: string;
  duration: number;
}) {
  const { duration, ...category } = params;
  log(category);
  //   ^?
}

