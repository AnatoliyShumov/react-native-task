import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 4,
    backgroundColor: 'blue',
    overflow: 'hidden',
    position: 'relative',
  },
  avatarText: {
    fontWeight: '600',
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  editableWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '110%',
    height: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: 'white',
    zIndex: 100,
    borderRadius: 4,
    overflow: 'hidden',
  },
});
