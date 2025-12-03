exports.handler = async (event) => {
  const { code } = event.queryStringParameters;
  
  return {
    statusCode: 200,
    body: JSON.stringify({ token: code }),
  };
};
