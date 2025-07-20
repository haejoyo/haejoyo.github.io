import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import Accordion from '@/components/Accordion.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Account = () => {
  const { hostInfo } = data;
  return (
    <HostInfoWrapper>
      <Paragraph>{hostInfo.message}</Paragraph>
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;