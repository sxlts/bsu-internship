import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class FilterServlet implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        long stTime = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        long endTime = System.currentTimeMillis();

        System.out.println(((HttpServletRequest)servletRequest).getMethod() + " - "
                + ((HttpServletRequest)servletRequest).getRequestURL() + " - "
                + (endTime - stTime) + "ms");
    }

    @Override
    public void destroy() {

    }
}
