#ifdef __cplusplus
#import "react-native-qht-sdk-library.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNQhtSdkLibrarySpec.h"

@interface QhtSdkLibrary : NSObject <NativeQhtSdkLibrarySpec>
#else
#import <React/RCTBridgeModule.h>

@interface QhtSdkLibrary : NSObject <RCTBridgeModule>
#endif

@end
