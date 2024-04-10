FROM emscripten/emsdk:3.1.57

RUN apt-get update \
 && apt-get install -y pkg-config \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/Microsoft/vcpkg.git /tmp/vcpkg \
 && /tmp/vcpkg/bootstrap-vcpkg.sh \
 && /tmp/vcpkg/vcpkg install openssl --triplet wasm32-emscripten

WORKDIR /app

COPY ./src /app/src
COPY ./CMakeLists.txt /app/

RUN emcmake cmake -S /app -B /app/build \
  -DCMAKE_BUILD_TYPE=Release \
  -DVCPKG_TARGET_TRIPLET=wasm32-emscripten \
  -DCMAKE_TOOLCHAIN_FILE=/tmp/vcpkg/scripts/buildsystems/vcpkg.cmake \
  -DVCPKG_CHAINLOAD_TOOLCHAIN_FILE=/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake

COPY ./html /app/html

RUN cmake --build /app/build \
 && mkdir -p /app/html/dist \
 && cp /app/build/eacardgen.* /app/html/dist/

EXPOSE 8080

ENTRYPOINT ["emrun", "./html/index.html", "--no-browser", "--port=8080"]