import { Oval } from 'react-loader-spinner';

const loadingStyles = { justifyContent: 'center', alignItems: 'center', margin: '50px  auto  0px auto', padding: '50px 20px' };

const Loading = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="var(--main-color)"
      wrapperStyle={loadingStyles}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ccc"
      strokeWidth={8}
      strokeWidthSecondary={8}
    />
  );
};

export default Loading;
