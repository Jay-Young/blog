$(function() {
    // 替换成自己的algolia信息
    var client = algoliasearch("99SEOT1H0K", "5f32c3a605ca6aba6c73407aa305e495");
    var index = client.initIndex("hugo_myblog");
    autocomplete(
      "#aa-search-input",
      { hint: false },
      {
        source: autocomplete.sources.hits(index, { hitsPerPage: 8 }),
        displayKey: "name",
        templates: {
          suggestion: function(suggestion) {
            console.log(suggestion);
            var search;
            if (suggestion.search) {
              search = suggestion.search;
            } else {
              search = suggestion.uri;
            }
            return (
              "<span>" +
              '<a href="/' +
              search +
              '">' +
              suggestion._highlightResult.title.value +
              "</a></span>"
            );
          }
        }
      }
    );
  
  
    $(document).on("click", ".aa-suggestion", function () { 
      var aa = $(this).find("a").attr("href");
      window.location.href = aa;
    })
  });