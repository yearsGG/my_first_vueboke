package com.example.demo.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // 根据需要禁用 CSRF
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/auth/**", "/api/orders","api/articles").permitAll() // 允许未认证用户访问
                                .anyRequest().authenticated() // 其他请求需要认证
                )
                .formLogin(form ->
                        form
                                .loginPage("/login") // 自定义登录页面 URL
                                .defaultSuccessUrl("/") // 登录成功后的默认页面
                                .permitAll() // 登录页面允许所有人访问
                )
                .logout(logout -> logout.permitAll()); // 允许所有人注销

        return http.build();
    }
}
