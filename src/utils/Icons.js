import {
    Work, AccountBalance, Power, LocalAtm,
    CheckCircle,
    HourglassEmpty,
    CancelPresentation,
    Email,
    People,
    Help,
    CreditCard,
    Cloud,
    Widgets
  } from '@material-ui/icons'

const IconRenderer = ({ iconName, className, style }) => {
  switch (iconName) {
    case 'AccountBalance':
      return <AccountBalance className={className} style={style} />;
    case 'Work':
      return <Work className={className} style={style} />;
    case 'Power':
      return <Power className={className} style={style} />;
    case 'LocalAtm':
      return <LocalAtm className={className} style={style} />;
    case 'CheckCircle':
      return <CheckCircle className={className} style={style} />;
    case 'HourglassEmpty':
      return <HourglassEmpty className={className} style={style} />;
    case 'CancelPresentation':
      return <CancelPresentation className={className} style={style} />;
    case 'Email':
      return <Email className={className} style={style} />;
    case 'People':
      return <People className={className} style={style} />;
    case 'CreditCard':
      return <CreditCard className={className} style={style} />;
    case 'Help':
      return <Help className={className} style={style} />;
    case 'Widgets':
      return <Widgets className={className} style={style} />;
    case 'Cloud':
      return <Cloud className={className} style={style} />;
    default:
      return null;
  }
};

export default IconRenderer;
