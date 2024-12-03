import { NativeModules, Platform } from 'react-native';
import CustomButton from './CustomButton';

const LINKING_ERROR =
  `The package 'react-native-qht-sdk-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: '- You have run \'pod install\'\n', default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const QhtSdkLibrary = NativeModules.QhtSdkLibrary
  ? NativeModules.QhtSdkLibrary
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    },
  );

export function multiply(a: number, b: number): Promise<number> {
  return QhtSdkLibrary.multiply(a, b);
}

export { CustomButton };
