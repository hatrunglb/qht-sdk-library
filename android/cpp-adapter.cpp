#include <jni.h>
#include "react-native-qht-sdk-library.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_qhtsdklibrary_QhtSdkLibraryModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return qhtsdklibrary::multiply(a, b);
}
