import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class PostServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String ID = req.getParameter("id");
        resp.getWriter().write("<script src=\"/js/PostList.js\"></script>");
        resp.getWriter().write("<script> PostList.deletePost(" + ID + ") </script>");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String ID = req.getParameter("id");
        resp.getWriter().write("<script src=\"/js/PostList.js\"></script>");
        resp.getWriter().write("<script> PostList.deletePost(" + ID + ") </script>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("<script src=\"/js/PostList.js\"></script>");
        resp.getWriter().write("<script> PostList.getPage() </script>");
    }
}
