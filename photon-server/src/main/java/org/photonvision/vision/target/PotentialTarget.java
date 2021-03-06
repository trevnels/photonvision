package org.photonvision.vision.target;

import java.util.ArrayList;
import java.util.List;
import org.opencv.core.RotatedRect;
import org.photonvision.vision.opencv.Contour;
import org.photonvision.vision.opencv.Releasable;

public class PotentialTarget implements Releasable {

    public final Contour m_mainContour;
    public final List<Contour> m_subContours;

    public PotentialTarget(Contour inputContour) {
        m_mainContour = inputContour;
        m_subContours = new ArrayList<>(); // empty
    }

    public PotentialTarget(Contour inputContour, List<Contour> subContours) {
        m_mainContour = inputContour;
        m_subContours = new ArrayList<>(subContours);
    }

    public RotatedRect getMinAreaRect() {
        return m_mainContour.getMinAreaRect();
    }

    public double getArea() {
        return m_mainContour.getArea();
    }

    @Override
    public void release() {
        m_mainContour.release();
        for (var sc : m_subContours) {
            sc.release();
        }
        m_subContours.clear();
    }
}
