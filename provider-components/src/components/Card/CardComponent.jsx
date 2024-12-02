import {
  Card,
  Statistic,
  Typography,
  Switch,
  Button,
  DatePicker,
  Row,
  Col,
} from 'antd';
import { getIcon } from '../../Utils/Icons/getIconFunction.jsx';

const { Text } = Typography;
const { Countdown } = Statistic;

const CardComponent = (props) => {
  const iconStyle = {
    textAlign: 'center',
    fontSize: '45px',
    margin: '10px 10px 0 10px',
  };
  const divStyle = {
    textAlign: 'center',
    flexBasis: '33.33%',
    padding: '0',
    width: '75px',
    flexGrow: 1,
    cursor: 'pointer',
  };
  {
    switch (props.typeCard) {
      case 'statistic':
        return (
          <>
            <Card bordered={true} onClick={props.onClickCard}>
              <Statistic
                title={props.tittle}
                value={props.value}
                precision={0}
                valueStyle={props.style}
                prefix={props.prefix}
                suffix={props.suffix}
              />
            </Card>
          </>
        );
      case 'userSettings':
        return (
          <>
            <Card
              actions={[
                <Switch
                  key={'Theme'}
                  checkedChildren={getIcon('SunOutlined')}
                  unCheckedChildren={getIcon('MoonOutlined')}
                  defaultChecked
                  style={{
                    alignItems: 'center',

                    width: '80%',
                  }}
                />,
                <Switch
                  key={'Theme'}
                  checkedChildren={'ES'}
                  unCheckedChildren={'EN'}
                  defaultChecked
                  style={{
                    alignItems: 'center',

                    width: '80%',
                  }}
                />,
              ]}
              title={
                <>
                  <div
                    style={{
                      whiteSpace: 'normal',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      style={{
                        display: 'block',
                        position: 'relative',
                        textAlign: 'center',
                      }}
                    >
                      {props.userName}
                    </Typography>
                    <Text
                      type="secondary"
                      style={{
                        textAlign: 'center',
                        fontSize: '12px',
                        display: 'block',
                        position: 'relative',
                        marginTop: '2px',
                        width: '200px',
                      }}
                    >
                      {props.depto}
                    </Text>
                  </div>
                </>
              }
            >
              <Countdown
                title="Token expires on"
                value={props.expiration_token || 0}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              />

              <Button
                size="small"
                type="primary"
                loading={props.LoadingRefresh}
                onClick={() => props.handleOnRefresh()}
                style={{
                  width: '100%',
                  height: '30px',
                  marginBottom: '10px',
                }}
              >
                Refresh Token
              </Button>
              <Button
                size="small"
                style={{ width: '100%', height: '30px' }}
                onClick={() => props.handleLogout()}
                danger
              >
                Logout
              </Button>
            </Card>
          </>
        );
      case 'mainApps':
        return (
          <>
            <Card
              styles={{
                body: {
                  padding: '8px',
                  display: 'inline-flex',
                },
              }}
            >
              {props.cardApps.map((menuOption) => (
                <Card.Grid
                  name={menuOption.appName}
                  style={divStyle}
                  onClick={menuOption.onClick}
                  value={menuOption.value}
                  key={`key-${menuOption.appName}-cardGrid`}
                >
                  {getIcon(
                    menuOption.icon,
                    iconStyle,
                    `key-${menuOption.appName}-icon`,
                  )}
                  <Typography key={`key-${menuOption.appName}-Typography`}>
                    {menuOption.appName}
                  </Typography>
                </Card.Grid>
              ))}
            </Card>
          </>
        );
      case 'tableMenu':
        return (
          <Card>
            <Row gutter={[10, 20]}>
              <Col>
                <DatePicker onChange={(e) => console.log(e)} />
              </Col>

              <Col>
                <Button type="primary">Buscar</Button>
              </Col>
            </Row>
          </Card>
        );
      default:
        return <Card {...props}>{props.CardContent}</Card>;
    }
  }
};
export default CardComponent;
