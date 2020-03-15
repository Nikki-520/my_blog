import Vue from 'vue';
import { differenceInDays, format, formatDistanceStrict } from 'date-fns';

Vue.mixin({
  methods: {
    /**
     * Returns formatted date depending on how old it is.
     * If older than 6 days, return formatted like '2 days ago',
     * otherwise return formatted like 'Aug 2'.
     * @param {String} date
     * @return {String} formatted date
     */
    shortTimestamp(date) {
      const articleDate = new Date(date);
      const todayDate = new Date();

      if (differenceInDays(todayDate, articleDate) > 6) {
        return format(articleDate, 'MMM d');
      } else {
        return formatDistanceStrict(articleDate, todayDate, { addSuffix: true });
      }
    },

    /**
     * Returns date formatted like 'May 9, 2017'
     * @param {String} date
     * @return {String} formatted date
     */
    longTimestamp(date) {
      return format(new Date(date), 'MMM d, yyyy');
    },
    dateFormat: function (time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return year + "-" + month + "-" + day;
    },
    /**
     * Handles the click event of the header logo
     */
    homeScrollTop() {
      // if (window.location.pathname === '/') {
      //   this.$scrollTo(document, 500);
      // } else {
      //   this.$router.push('/');
      // }
      this.$scrollTo(document, 500);
    },

    /**
     * Returns the featured media object of the given article and size
     * @param {Object} article
     * @param {String} size
     * @return {Object} featured media object
     */
    getFeaturedImage(article, size) {
      const featuredImage = article._embedded['wp:featuredmedia'];

      if (featuredImage) {
        return featuredImage[0].media_details.sizes[size];
      }
    }
  }
});
