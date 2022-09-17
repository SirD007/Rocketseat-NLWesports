import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content:{
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  discordButton:{
    width:231,
    height: 40,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 4,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16
  },
  label:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginTop: 24,
    marginBottom: 8
  },
  alert:{
    color: THEME.COLORS.SUCCESS,
    marginBottom: 38
  },
  alertCopied:{
    color: 'transparent',
    marginBottom: 35
  }
});