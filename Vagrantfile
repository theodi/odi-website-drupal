# -*- mode: ruby -*-
# vi: set ft=ruby :

require "yaml"
y = YAML.load File.open ".chef/rackspace_secrets.yaml"

###############################################################################

Vagrant.configure("2") do |config|

  config.butcher.knife_config_file = '.chef/knife.rb'

###############################################################################

  config.vm.define :drupal_theodi_org_01 do |drupal_theodi_org_01_config|
    drupal_theodi_org_01_config.vm.box      = "dummy"
    drupal_theodi_org_01_config.vm.hostname = "drupal-01"

    drupal_theodi_org_01_config.ssh.private_key_path = "./.chef/id_rsa"
    drupal_theodi_org_01_config.ssh.username         = "root"

    drupal_theodi_org_01_config.vm.provider :rackspace do |rs|
      rs.username        = y["username"]
      rs.api_key         = y["api_key"]
      rs.flavor          = /1GB/
      rs.image           = /Precise/
      rs.public_key_path = "./.chef/id_rsa.pub"
      rs.endpoint        = "https://lon.servers.api.rackspacecloud.com/v2"
      rs.auth_url        = "lon.identity.api.rackspacecloud.com"
    end

    drupal_theodi_org_01_config.vm.provision :shell, :inline => "curl -L https://www.opscode.com/chef/install.sh | bash"

    drupal_theodi_org_01_config.vm.provision :chef_client do |chef|
      chef.node_name              = "drupal-01"
      chef.environment            = "production"
      chef.chef_server_url        = "https://chef.theodi.org"
      chef.validation_client_name = "chef-validator"
      chef.validation_key_path    = ".chef/chef-validator.pem"
      chef.run_list               = chef.run_list = [
          "role[odi-drupal]"
      ]
    end
  end

###############################################################################

  config.vm.define :drupal_theodi_org_02 do |drupal_theodi_org_02_config|
    drupal_theodi_org_02_config.vm.box      = "dummy"
    drupal_theodi_org_02_config.vm.hostname = "drupal-02"

    drupal_theodi_org_02_config.ssh.private_key_path = "./.chef/id_rsa"
    drupal_theodi_org_02_config.ssh.username         = "root"

    drupal_theodi_org_02_config.vm.provider :rackspace do |rs|
      rs.username        = y["username"]
      rs.api_key         = y["api_key"]
      rs.flavor          = /2GB/
      rs.image           = /Precise/
      rs.public_key_path = "./.chef/id_rsa.pub"
      rs.endpoint        = "https://lon.servers.api.rackspacecloud.com/v2"
      rs.auth_url        = "lon.identity.api.rackspacecloud.com"
    end

    drupal_theodi_org_02_config.vm.provision :shell, :inline => "curl -L https://www.opscode.com/chef/install.sh | bash"

    drupal_theodi_org_02_config.vm.provision :chef_client do |chef|
      chef.node_name              = "drupal-02"
      chef.environment            = "production"
      chef.chef_server_url        = "https://chef.theodi.org"
      chef.validation_client_name = "chef-validator"
      chef.validation_key_path    = ".chef/chef-validator.pem"
      chef.run_list               = chef.run_list = [
          "role[odi-drupal]"
      ]
    end
  end

###############################################################################

  config.vm.define :squirrel_theodi_org do |squirrel_config|
    squirrel_config.vm.box      = "dummy"
    squirrel_config.vm.hostname = "squirrel"

    squirrel_config.ssh.private_key_path = "./.chef/id_rsa"
    squirrel_config.ssh.username         = "root"

    squirrel_config.vm.provider :rackspace do |rs|
      rs.username        = y["username"]
      rs.api_key         = y["api_key"]
      rs.flavor          = /2GB/
      rs.image           = /Precise/
      rs.public_key_path = "./.chef/id_rsa.pub"
      rs.endpoint        = "https://lon.servers.api.rackspacecloud.com/v2"
      rs.auth_url        = "lon.identity.api.rackspacecloud.com"
    end

    squirrel_config.vm.provision :shell, :inline => "curl -L https://www.opscode.com/chef/install.sh | bash"

    squirrel_config.vm.provision :chef_client do |chef|
      chef.node_name              = "squirrel"
      chef.environment            = "production"
      chef.chef_server_url        = "https://chef.theodi.org"
      chef.validation_client_name = "chef-validator"
      chef.validation_key_path    = ".chef/chef-validator.pem"
      chef.run_list               = chef.run_list = [
          "role[squirrel]"
      ]
    end
  end

###############################################################################

end
