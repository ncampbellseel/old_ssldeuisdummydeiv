package com.soprasteria;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.aws.context.config.annotation.EnableContextCredentials;
import org.springframework.cloud.aws.context.config.annotation.EnableContextRegion;
import org.springframework.cloud.aws.jdbc.config.annotation.EnableRdsInstance;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ImportResource("classpath:/aws-config.xml")
@EnableJpaRepositories
@EnableRdsInstance(databaseName="test", dbInstanceIdentifier="********", password="**********")
@EnableContextCredentials(accessKey="*******************", secretKey="*******************")
@EnableContextRegion(region="eu-west-1")
public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SsldeuisdummydeivApplication.class);
	}

}
