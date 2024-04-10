cmake_minimum_required(VERSION 3.16)

project(eacardgen LANGUAGES CXX VERSION 0.1.0.0)

if (NOT DEFINED EMSCRIPTEN)
    error("Standalone builds are not supported yet")
endif()

find_package(OpenSSL REQUIRED)

add_executable(${PROJECT_NAME}
    src/card.cc
    src/task.cc
)

target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)
target_link_libraries(${PROJECT_NAME} PRIVATE OpenSSL::Crypto embind)

target_compile_options(${PROJECT_NAME} PRIVATE -pthread -flto)
target_link_options(${PROJECT_NAME} PRIVATE -pthread -flto -s PTHREAD_POOL_SIZE=1 --closure=1)