const useUserLangage = () => {
  const userLangage = navigator.language.split(/-|_/)[0];
  return userLangage;
};

export default useUserLangage;
