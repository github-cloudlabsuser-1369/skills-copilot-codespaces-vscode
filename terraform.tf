provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Location for the storage account"
  type        = string
  default     = "East US"
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.location
}

output "storage_account_id" {
  value = azurerm_storage_account.example.id
}

output "storage_account_name" {
  value = azurerm_storage_account.example.name
}