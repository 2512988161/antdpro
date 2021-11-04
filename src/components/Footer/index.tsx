import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '李响出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} 李响出品`}
      links={[
        
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/2512988161',
          blankTarget: true,
        },
      ]}
    />
  );
};
