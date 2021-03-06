package org.photonvision.vision.pipe.impl;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.photonvision.vision.pipe.CVPipe;
import org.photonvision.vision.pipe.ImageRotationMode;

/** Pipe that rotates an image to a given orientation */
public class RotateImagePipe extends CVPipe<Mat, Mat, RotateImagePipe.RotateImageParams> {

    public RotateImagePipe() {
        setParams(RotateImageParams.DEFAULT);
    }

    public RotateImagePipe(RotateImageParams params) {
        setParams(params);
    }

    /**
    * Process this pipe
    *
    * @param in {@link Mat} to be rotated
    * @return Rotated {@link Mat}
    */
    @Override
    protected Mat process(Mat in) {
        Core.rotate(in, in, params.rotation.value);
        return in;
    }

    public static class RotateImageParams {
        public static RotateImageParams DEFAULT = new RotateImageParams(ImageRotationMode.DEG_0);

        public ImageRotationMode rotation;

        public RotateImageParams() {
            rotation = DEFAULT.rotation;
        }

        public RotateImageParams(ImageRotationMode rotation) {
            this.rotation = rotation;
        }
    }
}
